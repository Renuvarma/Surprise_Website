const screens = document.querySelectorAll(".screen");
const questions = [
  {
    text: "Do I make your days a little happier?",
    yes: "That smile is exactly what I was hoping for. 🥹💗",
    no: "Ouch 🙈 I'll keep trying to make you smile!"
  },
  {
    text: "Do you know how special you are to me?",
    yes: "I hope I remind you often enough. You really are. ❤️",
    no: "Then this little surprise has a very important job. 💌"
  },
  {
    text: "Can I keep making beautiful memories with you?",
    yes: "Here's to all the lovely little moments still ahead. 🫶",
    no: "I'm still saving a little space for more happy memories. 🌷"
  }
];

let currentQuestion = 0;
const questionText = document.getElementById("questionText");
const questionCounter = document.getElementById("questionCounter");
const progressFill = document.getElementById("progressFill");
const answerResponse = document.getElementById("answerResponse");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const answerButtons = document.querySelector(".answer-buttons");

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const question = questions[currentQuestion];
  questionText.textContent = question.text;
  questionCounter.textContent = `QUESTION ${currentQuestion + 1} OF ${questions.length}`;
  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  answerResponse.textContent = "Choose honestly… I'm watching 👀";
  answerButtons.classList.remove("hidden");
  nextQuestionBtn.classList.add("hidden");
  nextQuestionBtn.textContent = currentQuestion === questions.length - 1 ? "See OUR little memories →" : "Next question →";
}

document.getElementById("startBtn").addEventListener("click", () => {
  currentQuestion = 0;
  renderQuestion();
  showScreen("questions");
});

document.querySelectorAll(".answer-btn").forEach(button => {
  button.addEventListener("click", () => {
    const question = questions[currentQuestion];
    answerResponse.textContent = button.dataset.answer === "yes" ? question.yes : question.no;
    answerButtons.classList.add("hidden");
    nextQuestionBtn.classList.remove("hidden");
    createHeartBurst();
  });
});

nextQuestionBtn.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    showScreen("memories");
  }
});

document.querySelectorAll(".memory-card").forEach(card => {
  card.addEventListener("click", () => card.classList.toggle("flipped"));
});

document.getElementById("letterBtn").addEventListener("click", () => showScreen("letter"));
document.getElementById("restartBtn").addEventListener("click", () => {
  currentQuestion = 0;
  renderQuestion();
  document.querySelectorAll(".memory-card").forEach(card => card.classList.remove("flipped"));
  showScreen("welcome");
});

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 18}px`;
  heart.style.animationDuration = `${7 + Math.random() * 7}s`;
  document.querySelector(".floating-hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 15000);
}
function createHeartBurst() {
  for (let i = 0; i < 9; i++) setTimeout(createHeart, i * 90);
}
setInterval(createHeart, 1400);
