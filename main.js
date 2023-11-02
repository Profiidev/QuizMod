fetch("https://api.quizacademy.io/business-nest/public/courses/pin/CGGKVX", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((res) => {
    res.quizzes[0].questions.forEach(q => {
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
  .catch((err) => {});
