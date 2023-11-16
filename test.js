fetch("https://api.quizacademy.io/university-nest/public/live_events/pin/LGXYNI", {
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
}).then((res) => res.json().then((data) => {
  let x = {};
  data.questions.forEach((q) => {
    x[q.text] = q.answers.filter((a) => a.is_right).map((a) => a.text);
  });
  Object.keys(x).forEach((q, i) => {
    console.log(i + 1, ": ",q);
    console.log(" ");
    x[q].forEach((a) => {
      console.log(a);
    });
    console.log(" ");
    console.log(" ");
  });
}));
