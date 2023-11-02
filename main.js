fetch("https://api.quizacademy.io/business-nest/public/live_events/pin/LOSGFT", {
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
  });
