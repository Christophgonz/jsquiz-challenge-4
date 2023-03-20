var quizShow = document.querySelector("#questions");
var title = document.querySelector("#title");
var scoreMenu = document.querySelector("#highscores");
var startButton = document.querySelector("#start-button");

function hideTitle() {
  title.setAttribute("style", "display: none;");
}

function showTitle() {
  title.setAttribute("style", "display: block;");
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

startButton.addEventListener("click", hideTitle);
