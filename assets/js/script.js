var quizShow = document.querySelector("#questions");
var title = document.querySelector("#title");
var scoreMenu = document.querySelector("#highscores");
var startButton = document.querySelector("#start-button");
var timer = document.querySelector("#timer");
var main = document.querySelector("main");
var scores = document.querySelector("#scores");

var titleShowing = true;
var scoresShowing = false;

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
  if (!scoresShowing) {
    scoresShowing = true;
    scores.textContent = "test";
  } else {
    scoresShowing = false;
    scores.textContent = "";
  }
}

var questionNo = 0;

function displayQuestion(qNo) {
  var qContent = questions[qNo];
  scores.children[0].textContent = qContent.title;
  for (let i = 0; i < qContent.choices.length; i++) {
    var li = document.createElement("li");
    li.textContent = qContent.choices[i];
    scores.children[1].appendChild(li);
  }
  nextQuestion();
}

function removeQuestions(qNo) {
  var qContent = questions[qNo];
  scores.children[0].textContent = "";
  for (let i = qContent.choices.length - 1; i >= 0; i--) {
    scores.children[1].children[i].remove();
  }
}

function nextQuestion() {
  removeQuestions(questionNo);
  questionNo++;
  if (questionNo < questions.length) {
    displayQuestion(questionNo);
  } else {
    questionNo = 0;
  }
}

function startGame() {
  debugger;
  displayQuestion(questionNo);
}

startButton.addEventListener("click", startGame);
scoreMenu.addEventListener("click", showScores);

var questions = [
  {
    title: "0",
    choices: ["yes", "no"],
    correctAnswer: "",
  },
  {
    title: "1",
    choices: ["no"],
    correctAnswer: "",
  },
  {
    title: "2",
    choices: ["yes", "no"],
    correctAnswer: "",
  },
  {
    title: "3",
    choices: ["1", "2", "3"],
    correctAnswer: "",
  },
  {
    title: "4",
    choices: ["", ""],
    correctAnswer: "",
  },
  {
    title: "5",
    choices: ["", ""],
    correctAnswer: "",
  },
  {
    title: "6",
    choices: ["", ""],
    correctAnswer: "",
  },
];
