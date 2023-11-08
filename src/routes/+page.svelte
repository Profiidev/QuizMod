<script lang="ts">
  let code: string;
  let name: string;
  let answers: any = {};
  let uuid: string;
  let socket: WebSocket;
  let eventID: number;

  uuid = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

  const click = () => {
    fetch(`https://api.quizacademy.io/business-nest/public/live_events/pin/${code}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((res) => {
      res.questions.forEach((q: any) => {
        let right = [];
        if (q.answers.length > 0) {
          q.answers.forEach((a: any) => {
            if (a.is_right) {
              right.push(a.id);
            }
          });
        } else {
          right.push(q.is_right);
        }
        answers[q.id] = {
          right: right,
        };
      });
      console.log(res);
      eventID = res.id;
      register(res.id, name);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const register = (live_event_id: number, name: string) => {
    socket = new WebSocket("wss://udigu9uivk.execute-api.eu-central-1.amazonaws.com/business");
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
      console.log(`[message] Data received from server: ${event.data}`);
      let message = JSON.parse(event.data);
      react(message);
    }
  };

  const ping = () => {
    socket.send("__ping__");
    setTimeout(ping, 2000);
  };

  const react = (message: any) => {
    if(!message.status) return;
    if(message.status == "QUESTION") {
      setTimeout(() => {
        let q_id = message.active_question_id;
        fetch(`https://api.quizacademy.io/business-nest/public/live_events/${eventID}/results`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "answers": answers[q_id].right,
            "created_by": uuid,
            "event_id": eventID,
            "question_id": q_id,
            "result": 1,
            "time": 1001,
          }),
        })
      }, 5000);
    } else if(message.status == "QUESTION_END") {
      console.log("End");
    } else if(message.status == "QUESTION_RESULT") {
      console.log("Result");
    }
  };
</script>

<input type="text" bind:value={code}>
<input type="text" bind:value={name}>
<button on:click={click}>Start</button>

<style>
</style>