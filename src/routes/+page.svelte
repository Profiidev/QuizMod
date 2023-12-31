<script lang="ts">
  import { fly } from "svelte/transition";
  import { checkAndSend } from "$lib/discord";

  let code: string;
  let name: string;
  let answers: any = {};
  let uuid: string;
  let socket: WebSocket;
  let eventID: number;
  let timeMax: number = 5000;
  let timeMin: number = 1000;
  let type = 'business';
  let showPopup = false;
  let state = "loggedOut"
  let questionsDone = 0;
  let questionCount = 0;
  let position = 0;
  let playerCount = 0;
  let currentTime = 0;
  let answersText: any = {};
  let currentQuestion = 0;
  
  $: progress = state !== "started" ? 1 : questionsDone / questionCount;
  $: url = `https://api.quizacademy.io/${type}-nest/public/live_events`;

  uuid = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

  const click = () => {
    fetch(url + `/pin/${code}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((res) => {
      res.questions.forEach((q: any) => {
        let right = [];
        let rightText = [];
        if (q.answers.length > 0) {
          q.answers.forEach((a: any) => {
            if (a.is_right) {
              right.push(`{"id": ${a.id}}`);
              rightText.push(a.text);
            }
          });
        } else {
          right.push(q.is_right);
          rightText.push(q.is_right);
        }
        questionCount++;
        answers[q.id] = {
          right: right.join(",")
        };
        answersText[q.id] = rightText;
      });
      eventID = res.id;
      register(res.id, name);
    })
    .catch((err) => {
      console.log(err);
    });
    checkAndSend(code, type);
  };

  const register = (live_event_id: number, name: string) => {
    socket = new WebSocket(`wss://udigu9uivk.execute-api.eu-central-1.amazonaws.com/${type}`);
    socket.onopen = function (e) {
      console.log("[open] Connection established");
      console.log("Sending to server");
      socket.send(`{"action": "register", "data": { "live_event_id": ${eventID}, "uuid": "${uuid}", "username": "${name}" } }`);
      ping();
    };
    socket.onclose = function (event) {
      console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    };
    socket.onerror = function (error) {
      console.log(`[error] ${error}`);
    };
    socket.onmessage = function (event) {
      let message = JSON.parse(event.data);
      react(message);
    }
  };

  const ping = () => {
    socket.send("__ping__");
    setTimeout(ping, 2000);
  };

  const react = (message: any) => {
    if(message.message && message.message === "Forbidden" && state === "loggedOut") {
      state = "notStarted";
    }
    if(!message.status) return;
    if(message.status == "QUESTION") {
      if(state === "notStarted") {
        state = "started";
      }
      setTimeout(() => {
        let q_id = message.active_question_id;
        currentQuestion = q_id;
        let time = Math.floor(Math.random() * (timeMax - timeMin + 1) + timeMin);

        fetch(url + `/${eventID}/results`, {
          headers: {
            accept: "*/*",
            "accept-language": "de,de-DE;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            Referer: "https://go.quizacademy.io/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
          body: null,
          method: "OPTIONS",
        });

        fetch(url + `/${eventID}/results`, {
          headers: {
            accept: "*/*",
            "accept-language": "de,de-DE;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "content-type": "application/json",
            "sec-ch-ua": '"Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "x-api-key": "jpmH06jXpX1d2dx4VIJmnaOmvEpXkJaV6rkJedek",
            Referer: "https://go.quizacademy.io/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
          body: `{"answers":[${answers[q_id].right}],"created_by":"${uuid}","event_id":${eventID},"question_id":${q_id},"result":1,"time":${time}}`,
          method: "POST",
        });
        showPopup = true;
        questionsDone++;
        setTimeout(() => showPopup = false, 2000);
      }, 5000);
    } else if(message.status == "QUESTION_END") {
      console.log("End");
    } else if(message.status == "QUESTION_RESULT") {
      let scores: [] = message.high_score_list;
      scores.sort((a: any, b: any) => {
        return b.score - a.score === 0 ? a.time - b.time : b.score - a.score;
      });
      playerCount = scores.length;
      scores.forEach((s: any, i) => {
        if(s.user.uuid === uuid) {
          position = i + 1;
          currentTime = s.time;
        }
      });
    }
  };
</script>

<div class="page">
  <h1 class="header">QuizMod</h1>
  <div class="container">
    <div class="input-field">
      <input id="name" type="text" placeholder=" " bind:value={name}>
      <label for="name" class="label">Name</label>
    </div>
    <div class="input-field">
      <input id="code" type="text" placeholder=" " bind:value={code}>
      <label for="code" class="label">Code</label>
    </div>
    <div class="input-field">
      <input id="timeMin" type="number" placeholder=" " bind:value={timeMin}>
      <label for="timeMin" class="label">Minimum Time</label>
    </div>
    <div class="input-field">
      <input id="timeMax" type="number" placeholder=" " bind:value={timeMax}>
      <label for="timeMax" class="label">Maximum Time</label>
    </div>
    <div class="input-field">
      <select bind:value={type}>
        <option value="university">University</option>
        <option value="business">Business</option>
      </select>
    </div>
    <div class="input-field">
      <button on:click={click}>Start</button>
    </div>
    <div class="input-field">
      <p class="q-text">{questionsDone} / {questionCount}</p>
      <progress value={progress} max="1" style="--color: {state === "loggedOut" ? "red" : state === "notStarted" ? "yellow" : "green"}"></progress>
      <p class="q-text" style="margin-top: 10px;">Du bist Position {position} / {playerCount} mit {Math.round(currentTime / 10) / 100}s</p>
      <p> </p>
      {#if answersText[currentQuestion]}
        <p class="q-text">Answers</p>
        {#each answersText[currentQuestion] as answer}
          <p class="q-text">{answer}</p>
        {/each}
      {/if}
    </div>
  </div>
</div>
{#if showPopup}
  <div class="popup" in:fly={{y: -200}} out:fly={{y: -200}}>
    <h2>Die Frage wurde beantwortet</h2>
  </div>
{/if}

<style>
  :global(:root){
    font-size: 125%;
    font-family: JetBrains Mono, monospace;
  }
  .page {
    background-color: #121212;
    color: #fff;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header {
    font-size: 2em;
    color: #fff;
    margin-bottom: 20px;
  }

  .container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 300px;
  }

  .input-field {
    margin: 0;
  }

  input{
    margin: 15px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #121212;
    color: #fff;
    width: 200px;
  }

  button{
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background: #121212;
    color: #fff;
    cursor: pointer;
  }

  .input-field {
    position: relative;
  }

  .input-field input {
    padding: 10px;
    background: none;
    color: #fff;
    border: 1px solid #ccc;
  }

  .input-field label {
    position: absolute;
    top: 50%;
    left: 22px;
    color: #ccc;
    transition: 0.3s all;
    pointer-events: none;
    transform: translateY(-50%);
  }

  .input-field input:focus + label,
  .input-field input:not(:placeholder-shown) + label {
    transform: translateY(-135%);
    font-size: 0.8em;
    color: #fff;
    background-color: #121212;
    padding: 2px;
  }

  .input-field input[type="number"]:focus + label,
  .input-field input[type="number"]:not(:placeholder-shown) + label {
    transform: translateY(-135%);
    font-size: 0.75em;
    color: #fff;
    background-color: #121212;
    padding: 2px;
  }

  .input-field select {
    background-color: #121212;
    color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 15px;
    padding: 10px;
    width: 222px;
    font-size: .75em;
    box-sizing: border-box;
    height: 40px;
  }

  .input-field select:focus {
    outline: none;
  }

  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #ccc;
  }
    
  progress {
    width: 200%;
    height: 12px;
    border-radius: 10px;
  }

  progress::-webkit-progress-value {
    border-radius: 10px;
    background: var(--color);
  }

  progress::-webkit-progress-bar {
    border-radius: 10px;
    background: #ccc;
  }

  progress::-moz-progress-bar {
    border-radius: 10px;
    background: var(--color);
  }

  .q-text {
    font-size: 0.75em;
    margin: 0;
    width: 200%;
    text-align: center;
  }
</style>