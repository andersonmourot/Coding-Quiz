

var timerEl = document.getElementById("time");
var startBtn = document.getElementById("start-btn");
var questionCont = document.getElementById("questions-container");
var questionEl = document.getElementById("question");
var answerBtnEl = document.getElementById("answer-buttons");
var intro = document.getElementById("intro");
var highscores = document.getElementById("highscores");
var scoreEl = document.getElementById("score");
var input = document.querySelector("input");
var initialsBTN = document.getElementById("initials-button");


var shuffledQuestions, currentQuestionIndex



var questions = [
  {
    question: "Commonly used data types DO NOT include: ",
    answers: [
      {text: "1. Strings", correct: false},
      {text: "2. Booleans", correct: false},
      {text: "3. Alerts", correct: true},
      {text: "4. Numbers", correct: false}
    ]
  },
  {
    question: "The condition in an if / else statement is enclosed with ________.",
    answers: [
      {text: "1. Quotes", correct: false},
      {text: "2. Curly Brackets", correct: false},
      {text: "3. Parenthesis", correct: true},
      {text: "4. Square Brackets", correct: false}
    ]
  },
  {
    question: "Arrays in JavaScript can be used to store _________.",
    answers: [
      {text: "1. Numbers and Strings", correct: false},
      {text: "2. Other Arrays", correct: false},
      {text: "3. Booleans", correct: false},
      {text: "4. All of the above", correct: true}
    ]
  },
  {
    question: "String values must be enclosed within ________ when being assigned to variables.",
    answers: [
      {text: "1. Commas", correct: false},
      {text: "2. Curly Brackets", correct: false},
      {text: "3. Quotes", correct: true},
      {text: "4. Parenthesis", correct: false}
    ]
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answers: [
      {text: "1. JavaScript", correct: false},
      {text: "2. Terminal/Bash", correct: false},
      {text: "3. For Loops", correct: false},
      {text: "4. Console.log", correct: true}
    ]
  }

]

var timeLeft = 60;
var timeInterval;

function setTime() {
    timeInterval = setInterval(function () {

      if (timeLeft > 1) {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--;

      } else if (timeLeft === 1) {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--;

      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }

    }, 1000);
}


startBtn.addEventListener("click", setTime);
startBtn.addEventListener("click", startGame);
answerBtnEl.addEventListener("click", nextQuestion)


function nextQuestion() {
  currentQuestionIndex++
  setNextQuestion()
}



function startGame() {
  startBtn.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionCont.classList.remove("hide");
  intro.classList.add("hide");
  setNextQuestion();

}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
  questionEl.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement ("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerBtnEl.appendChild(button)
  })
}

function resetState () {
  while (answerBtnEl.firstChild) {
    answerBtnEl.removeChild (answerBtnEl.firstChild)
  }
}


function selectAnswer(e) {
var selectedBtn = e.target
var correct = selectedBtn.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerBtnEl.children).forEach(button => {
  setStatusClass(button, button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionIndex + 1) {
  setNextQuestion()
} else {
  //startBtn.innerText = "Go Back"
  //selectedBtn.classList.remove("hide")
  questionCont.classList.add("hide");
  highscores.classList.remove("hide");
  quizEnd()
}
}

function quizEnd() {
  clearInterval(timeInterval);
  scoreEl.textContent = timeLeft;
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct")
  element.classList.remove("wrong")
}

