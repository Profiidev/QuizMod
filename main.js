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
let s = "eyJraWQiOiI5RUtaRzk0VnBOeUQ3cmhtZGhERGVpVWRiZ3pvaHlLVjNIZjlDem1Rd1NVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlNWU1OWExMS1hOTFkLTQ2NTAtOWJkNy1lMzliOTZjMGI4MjQiLCJjb2duaXRvOmdyb3VwcyI6WyJDb3Vyc2VNYW5hZ2VyIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9jQjlCeUlHbTMiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiZTVlNTlhMTEtYTkxZC00NjUwLTliZDctZTM5Yjk2YzBiODI0IiwiZ2l2ZW5fbmFtZSI6IlRlc3QiLCJhdWQiOiIxc2plZjg0ODQxYXVyMDE5Y3Q5MXVrcDRjcCIsImV2ZW50X2lkIjoiMTQ3MzNlYzMtYjcwOS00MDkzLTllZDEtZjJlZmY2ZWY0NTQwIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2OTk0MzYxMjMsIm5hbWUiOiJGUkVFIiwibmlja25hbWUiOiJTb25zdGlnZSIsImV4cCI6MTY5OTk2MTkwOCwiaWF0IjoxNjk5OTU4MzA4LCJmYW1pbHlfbmFtZSI6IlVzZXIgKEJlbnV0emVyIGJpdHRlIG5pY2h0IMOkbmRlcm4hKSIsImVtYWlsIjoidGVzdC51c2VyQHF1aXphY2FkZW15LmRlIn0.IiO9N9s9iZtsuzVVc0je7our9-OZzc-c4aD3HO5FeVHTl7AMn0y9jtq1hOqd3FFsTF_fUYDskSCb4Q1IypX8--KGhSszTcYwMnRDhx6y5d2W7tUVNVPi-jDiajzVddiku7oM4ry3K71Csz9uMDRhrDgsQ39DTzKBSVSBdOdE7NvWV9LifaG03hnut1gD0uvG6hF2jZcgi5M_Z78yj5c2cGZxT-Z4K_WO4X4FoibwSG-wJ54EzhtJJreWxze6i3zCB0wzLYS98rNZLsTafiETQgEgCyyp8K2SkPN-x5WPhvJlJ10iIlaMnxUHqOOk9krOMuuIYWbtJSfeMHNbhFo0aA"
console.log(s.split("."))