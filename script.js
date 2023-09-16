const questions = document.querySelectorAll("li");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.querySelector(".answer");
    const questionText = question.querySelector(".question");
    const arrow = question.querySelector(".arrow");
    answer.classList.toggle("answer-show");
    questionText.classList.toggle("question-show");
    arrow.classList.toggle("arrow-show");
  });
});
