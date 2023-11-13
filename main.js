/*fetch("https://api.quizacademy.io/business-nest/public/live_events/pin/LOSGFT", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((res) => {
    res.questions.forEach((q) => {
      let right = [];
      if (q.answers.length > 0) {
        q.answers.forEach((a) => {
          if (a.is_right) {
            right.push(a.text);
          }
        });
      } else {
        right.push(q.is_right);
      }
      console.log(q.position, q.text, right);
    });
  })
  .catch((err) => {
    console.log(err);
  });*/
fetch("https://api.quizacademy.io/business-nest/public/live_events/4337/results", {
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
fetch("https://api.quizacademy.io/business-nest/public/live_events/4337/results", {
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
  body: '{"answers":[{"id":687524},{"id":687525}],"created_by":"6495c3e2-766d-4154-915d-ab01e9cdd56f","event_id":4337,"question_id":173625,"result":0,"time":2574}',
  method: "POST",
});

/*
fetch("https://api.quizacademy.io/business-nest/public/live_events/4337/results", {
          "headers": {
            "accept": "*\/*",
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
          "body": `{\"answers\":[${answers[q_id].right}],\"created_by\":\"${uuid}\",\"event_id\":${eventID},\"question_id\":${q_id},\"result\":1,\"time\":${time}}`,
          "method": "POST"
        });

*/