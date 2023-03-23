const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const answers = ["c", "a", "b", "b", "c", "a", "c", "a", "b", "c","b", "a", "c", "b", "c", "b", "b", "a", "b", "c"];
  // change this array to include the correct answers for all 10 questions

  let score = 0;
  let numCorrect = 0;

  for (let i = 1; i <= 20; i++) {
    const question = document.getElementsByName(`q${i}`);
    const selected = Array.from(question).find(q => q.checked);

    if (!selected) {
      // handle case where user did not select an answer
      alert(`You missed question ${i}.`);
      return;
    }

    if (selected.value === answers[i - 1]) {
      selected.parentNode.style.color = 'green';
      score += 1;
      numCorrect++;
    } else {
      selected.parentNode.style.color = 'red';
      score -= 0.25;
      
    }
  }

       alert(`You got ${numCorrect} correct out of 20 questions. Your score is ${score} out of 20.`);
});
