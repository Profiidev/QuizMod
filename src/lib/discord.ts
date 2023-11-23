export const checkAndSend = (code: string, type: string) => {
  fetch("http://nacktebusen.de/quizmod/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: code,
    }),
  }).then((res) =>
    res.json().then((data) => {
      if (data.message === "not") {
        sendToDC(code, type);
      }
    })
  );
}

const sendToDC = (code: string, type: string) => {
  let answers = "";
  fetch(`https://api.quizacademy.io/${type}-nest/public/live_events/pin/${code}`, {
    headers: {
      accept: "application/json",
      "accept-language": "de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7",
      "sec-ch-ua": '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-api-key": "jpmH06jXpX1d2dx4VIJmnaOmvEpXkJaV6rkJedek",
      Referer: "https://u.quizacademy.io/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: null,
    method: "GET",
  }).then((res) =>
    res.json().then((data) => {
      let x: any = {};
      answers = `**${data.name}**\n\n`;
      data.questions.forEach((q: any) => {
        x[q.text] = q.answers.filter((a: any) => a.is_right).map((a: any) => a.text);
      });
      Object.keys(x).forEach((q, i) => {
        answers += `${i + 1}: ${q}:\n${x[q].join("\n")}\n\n`;
      });

      if (answers === "") return;

      send(answers);
    })
  );
};

const send = (text: string) => {
  let part = text.substring(0, 2000);
  let rest = text.substring(2000);
  fetch("https://discord.com/api/webhooks/1176431390334656624/h0rHp5wpPGJCJN6wydRCioVO2aqDzi3QKOrakU1TBZNSJdhC7zzG01GE1dOvnFIPHhpn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "QuizMod",
      avatar_url: "",
      content: part,
    }),
  }).then(() => {
    if (rest.length > 0) send(rest);
  });
}
