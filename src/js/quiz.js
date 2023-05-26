"use strict";
const hamburger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".desktop__nav--wrapper");
const navLinks = document.querySelectorAll(".Desktop__nav--icons");
const overlay = document.querySelector(".overlay");
const quizEL = document.getElementById("quiz");
const testEL = document.getElementById("test");
const statsEL = document.getElementById("stats");
const testBtn = document.getElementById("test__btn");
const currQuestionNum = document.getElementById("current__question");
const totalTestNumEL = document.getElementById("total__test");
const questionEl = document.getElementById("quiz__question");
const msgEl = document.getElementById("msg");
const quizAnswers = document.querySelector(".quiz__answers");
const quizAnswersBtn = document.querySelector(".quiz__answers-opt");
const nextBtn = document.querySelector(".next__btn");
const statsLoader = document.querySelector(".loader-1");
const statsResult = document.querySelector("#result");

//INITIAL Question index and score
let data;
let currentQuestionIndex,
  score = 0;

//QUIZ QUESTIONS
const questions = [
  {
    question:
      "When conducting user research, which method is most effective for gathering qualitative data?",
    answers: [
      { text: "Surveys", correct: false },
      { text: "Interviews", correct: true },
      { text: "Analytics", correct: false },
      { text: "A/B testing", correct: false },
    ],
  },

  {
    question:
      "Which design principle focuses on ensuring consistency and predictability in user interfaces?",
    answers: [
      { text: " Visual Hierarchy", correct: false },
      { text: "Proximity", correct: false },
      { text: "Consistency", correct: true },
      { text: "Contrast", correct: false },
    ],
  },
  // {
  //   question:
  //     "Which prototyping technique allows users to interact with a simulated version of a digital product?",
  //   answers: [
  //     { text: "Paper prototyping", correct: false },
  //     { text: "Low-fidelity wireframes", correct: false },
  //     { text: "High-fidelity mockups", correct: false },
  //     { text: "Interactive prototypes", correct: true },
  //   ],
  // },
  {
    question:
      "Which usability testing method involves observing users as they perform tasks in a controlled environment?",
    answers: [
      { text: "Remote usability testing", correct: false },
      { text: "Expert review", correct: false },
      { text: "Card sorting", correct: false },
      { text: "In-person usability testing", correct: true },
    ],
  },
  ////////////////////////////////////////
  {
    question:
      "Which CSS property allows you to adjust the spacing between elements?",
    answers: [
      { text: "Margin", correct: true },
      { text: "Padding", correct: false },
      { text: "Border", correct: false },
      { text: "Display", correct: false },
    ],
  },
  {
    question:
      "Which programming language is primarily used for building interactive web interfaces?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: false },
      { text: "JavaScript", correct: true },
      { text: "PHP", correct: false },
    ],
  },
  {
    question:
      "Which JavaScript method is used to add or remove classes from an HTML element?",
    answers: [
      { text: "GetElementById", correct: false },
      { text: "AppendChild", correct: false },
      { text: "AddEventListener", correct: false },
      { text: "ClassList", correct: true },
    ],
  },
  {
    question:
      "Which CSS technique is used to make a website responsive across different screen sizes?",
    answers: [
      { text: "Media queries", correct: true },
      { text: "Flexbox", correct: false },
      { text: "Grid layout", correct: false },
      { text: "Transitions", correct: false },
    ],
  },
  {
    question:
      "Which frontend framework is widely used for building reusable UI components?",
    answers: [
      { text: "React", correct: true },
      { text: "Angular", correct: false },
      { text: "Vue.js", correct: false },
      { text: "Ember.js", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to define a hyperlink?",
    answers: [
      { text: "a", correct: true },
      { text: "p", correct: false },
      { text: "div", correct: false },
      { text: "img", correct: false },
    ],
  },
  {
    question:
      "Which JavaScript library is commonly used for DOM manipulation and animation effects?",
    answers: [
      { text: "JQuery", correct: true },
      { text: "Lodash", correct: false },
      { text: "Moment.js", correct: false },
      { text: "Axios", correct: false },
    ],
  },
];

//----------------HAMBURGER---------------
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("toggle");
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
  hamburger.classList.remove("toggle");
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
});
//Hamburger close on link click
navLinks.forEach((n) => {
  n.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("toggle");
    overlay.classList.remove("active");
  });
});

//QUIZ CODE
testBtn.addEventListener("click", (e) => {
  testEL.classList.add("hidden");
  statsEL.classList.add("hidden");
  quizEL.classList.remove("hidden");
  startQuiz();
  showQuestion();
});

//Start quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  totalTestNumEL.innerHTML = questions.length;
}
function update() {
  const finalScore = localStorage.getItem("totalScore");
  const scorePercentage = finalScore * questions.length;

  //update progress bar
  statsResult.innerHTML = scorePercentage + "%";
  statsLoader.style.width = scorePercentage + "%";
  if (scorePercentage >= 50 && scorePercentage < 71) {
    msgEl.innerHTML = "AVERAGE";
  }
  if (scorePercentage < 40) {
    msgEl.innerHTML = "POOR";
  }
  if (scorePercentage > 70) {
    msgEl.innerHTML = "VERY GOOD";
  }
  if (scorePercentage > 90) {
    msgEl.innerHTML = "EXCELLENT";
  }
  console.log(scorePercentage);
}

function displayStats() {
  testEL.classList.remove("hidden");
  statsEL.classList.remove("hidden");
  quizEL.classList.add("hidden");
  setTimeout(() => {
    update();
  }, 500);
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = ++currentQuestionIndex;
  let totalQuestions = questions.length;
  currQuestionNum.innerHTML = questionNo;

  questionEl.innerHTML = currentQuestion.question;

  //Populate the questions field
  currentQuestion.answers.forEach((answer) => {
    let correctAns;
    if (answer.correct) {
      correctAns = true;
    } else {
      correctAns = false;
    }
    const quiz = `<button class="quiz-answer-opt" data-correct="${correctAns}">${answer.text}</button>`;

    //Display Each questions
    quizAnswers.insertAdjacentHTML("afterbegin", quiz);
  });
}

nextBtn.addEventListener("click", () => {
  quizAnswers.innerHTML = "";
  // showQuestion();

  if (currentQuestionIndex >= questions.length) {
    displayStats();
    data = localStorage.setItem("totalScore", score);
  } else {
    showQuestion();
  }
});

quizAnswers.addEventListener("click", (e) => {
  const ans = e.target;

  //Get the dataAttr value and check each clicked ans for that.
  const ansData = e.target.dataset.correct;
  if (ansData === "true") {
    ans.classList.add("success");
    score++;
  } else {
    ans.classList.add("fail");
  }

  //In the case of the user selecting the wrong answer, the correct answer will then be highlighted
  //and the buttons will be disabled, a user must proceed to continue.
  Array.from(quizAnswers.children).forEach((btn) => {
    if (btn.dataset.correct === "true") {
      btn.classList.add("success");
    }
    btn.disabled = true;
  });
});

// Get the timer display element
const timerDisplay = document.getElementById('timer-display');

// Retrieve the timer values from localStorage or initialize them to 0
let hours = parseInt(localStorage.getItem('hours')) || 0;
let minutes = parseInt(localStorage.getItem('minutes')) || 0;
let seconds = parseInt(localStorage.getItem('seconds')) || 0;

// Function to update the timer display
function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  // Format the time values with leading zeros
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Update the timer display
  timerDisplay.textContent = formattedTime;

  // Store the timer values in localStorage
  localStorage.setItem('hours', hours);
  localStorage.setItem('minutes', minutes);
  localStorage.setItem('seconds', seconds);
}

// Start the timer
setInterval(updateTimer, 1000);


const storedUser = localStorage.getItem("data")
const user = JSON.parse(storedUser)
console.log(user.firstname)

document.addEventListener("DOMContentLoaded", function() {
  // Get the userName element
  const userNameElement = document.getElementById("userName");
  const profileFirstNmae = document.getElementById("profileFirstNmae")
  const profileLast = document.getElementById("lastName")
  const profileemail = document.getElementById("profileEmail")

  if (userNameElement) {
    userNameElement.innerHTML = user.firstname; 
    profileFirstNmae.innerHTML = user.firstname;
  }
  if (profileemail){
    profileemail.innerHTML = user.email
  }
  if (profileLast){
    profileLast.innerHTML = user.lastname
  }
});