var quizShow = document.querySelector("#questions");
var title = document.querySelector("#title");
var scoreMenu = document.querySelector("#highscores");
var startButton = document.querySelector("#start-button");
var timer = document.querySelector("#timer");

var titleShowing = true;

function toggleTitle() {
  if (titleShowing) {
    title.setAttribute("style", "display: none;");
    startButton.setAttribute("style", "display: none;");
    titleShowing = false;
  } else {
    title.setAttribute("style", "display: block;");
    startButton.setAttribute("style", "display: block;");
    titleShowing = true;
  }
}

function showScores() {
  toggleTitle();
}

var questions = [
  {
    title: "",
    choices: ["", ""],
    correctAnswer: "",
  },
  {
    title: "",
    choices: ["", ""],
    correctAnswer: "",
  },
  {
    title: "",
    choices: ["", ""],
    correctAnswer: "",
  },
  {
    title: "",
    choices: ["", ""],
    correctAnswer: "",
  },
  {
    title: "",
    choices: ["", ""],
    correctAnswer: "",
  },
  {
    title: "",
    choices: ["", ""],
    correctAnswer: "",
  },
  {
    title: "",
    choices: ["", ""],
    correctAnswer: "",
  },
  {},
];

var questionNo = 0;

startButton.addEventListener("click", toggleTitle);
scoreMenu.addEventListener("click", showScores);
