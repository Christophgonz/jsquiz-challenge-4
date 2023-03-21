var quizShow = document.querySelector("#questions");
var title = document.querySelector("#title");
var scoreMenu = document.querySelector("#highscores");
var startButton = document.querySelector("#start-button");
var timer = document.querySelector("#timer");
var main = document.querySelector("main");
var scores = document.querySelector("#scores");

var timeRemain = 0;

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
  quizShow.children[0].textContent = qContent.title;
  for (let i = 0; i < qContent.choices.length; i++) {
    var li = document.createElement("li");
    li.textContent = qContent.choices[i];
    quizShow.children[1].appendChild(li);
  }
}

function removeQuestions(qNo) {
  var qContent = questions[qNo];
  quizShow.children[0].textContent = "";
  for (let i = qContent.choices.length - 1; i >= 0; i--) {
    quizShow.children[1].children[i].remove();
  }
}

function nextQuestion() {
  removeQuestions(questionNo);
  questionNo++;
  if (questionNo < questions.length) {
    displayQuestion(questionNo);
  } else {
    gameEnd();
    questionNo = 0;
    timeRemain = 0;
    toggleTitle();
  }
}

function startGame() {
  toggleTitle();
  countdown();
  displayQuestion(0);
}

function countdown() {
  timeRemain = 75;
  timer.textContent = "Time: " + timeRemain;

  var timeInterval = setInterval(function () {
    timer.textContent = "Time: " + timeRemain;
    timeRemain--;
    if (timeRemain <= 0) {
      timer.textContent = "Time: 00";
      clearInterval(timeInterval);
    }
  }, 1000);
}

function gameEnd() {
  endScore.initials = prompt("Please enter your initials");
  endScore.finalScore = timeRemain;
  console.log(endScore);
}

startButton.addEventListener("click", startGame);
scoreMenu.addEventListener("click", showScores);

// Clicking an answer
quizShow.addEventListener("click", function (event) {
  var element = event.target;
  // Checking if what clicked is a choice
  if (element.matches("li")) {
    // if the correct answer is chosen
    if (element.textContent === questions[questionNo].correctAnswer) {
      // move to the next question
      nextQuestion();
    } else {
      // reduce remaining time
      timeRemain -= 10;
      // move to the next question
      nextQuestion();
    }
  }
});

var endScore = {
  initials: "",
  finalScore: 0,
};

var questions = [
  {
    title: "Commonly used data types do NOT include",
    choices: ["number", "String", "boolean", "alerts"],
    correctAnswer: "alerts",
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
