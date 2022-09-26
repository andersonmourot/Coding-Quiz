
//Variables for the JS
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
var scoreBtn = document.getElementById("scores");

var buttonA = document.getElementById("answer-A")
var buttonB = document.getElementById("answer-B")
var buttonC = document.getElementById("answer-C")
var buttonD = document.getElementById("answer-D")

var shuffledQuestions, currentQuestionIndex


//Arrays of questions to use in the quiz
var questions = [
  {
    question: "Commonly used data types DO NOT include: ",
    answers: [
      { text: "1. Strings", correct: false },
      { text: "2. Booleans", correct: false },
      { text: "3. Alerts", correct: true },
      { text: "4. Numbers", correct: false }
    ],
    correctAns: "3. Alerts"
  },
  {
    question: "The condition in an if / else statement is enclosed with ________.",
    answers: [
      { text: "1. Quotes", correct: false },
      { text: "2. Curly Brackets", correct: false },
      { text: "3. Parenthesis", correct: true },
      { text: "4. Square Brackets", correct: false }
    ],
    correctAns: "3. Parenthesis"
  },
  {
    question: "Arrays in JavaScript can be used to store _________.",
    answers: [
      { text: "1. Numbers and Strings", correct: false },
      { text: "2. Other Arrays", correct: false },
      { text: "3. Booleans", correct: false },
      { text: "4. All of the above", correct: true }
    ],
    correctAns: "4. All of the above"
  },
  {
    question: "String values must be enclosed within ________ when being assigned to variables.",
    answers: [
      { text: "1. Commas", correct: false },
      { text: "2. Curly Brackets", correct: false },
      { text: "3. Quotes", correct: true },
      { text: "4. Parenthesis", correct: false }
    ],
    correctAns: "3. Quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answers: [
      { text: "1. JavaScript", correct: false },
      { text: "2. Terminal/Bash", correct: false },
      { text: "3. For Loops", correct: false },
      { text: "4. Console.log", correct: true }
    ],
    correctAns: "4. Console.log"
  }

]


//Timer function and variables to run the timer for the quiz
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

//Function to bring up the next question of the quiz
function nextQuestion() {
  currentQuestionIndex++
  nextQuestion()
}


//Starts the game and randomizes the questions
function startGame() {
  startBtn.classList.add("hide");
  questionCont.classList.remove("hide");
  intro.classList.add("hide");
  showQuestion();

}


//Funtionality for selecting the answer
function showQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    buttonA.textContent = questions[currentQuestionIndex].answers[0].text;
    buttonB.textContent = questions[currentQuestionIndex].answers[1].text;
    buttonC.textContent = questions[currentQuestionIndex].answers[2].text;
    buttonD.textContent = questions[currentQuestionIndex].answers[3].text;
};


//Function to determine the answer is correct or not
function selectAnswer(selected) {
  var correctAnswer = questions[currentQuestionIndex].correctAns;
  console.log(correctAnswer)
  if (selected === correctAnswer) {
    alert("please work");
    timeLeft += 5;
  } else {
    alert("I mean it");
    timeLeft -= 10;
  };

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++
    showQuestion()
  } else {
    questionCont.classList.add("hide");
    highscores.classList.remove("hide");
    quizEnd()
    saveScore()
  }
};


//Ends the quiz and brings up the final page
function quizEnd() {
  clearInterval(timeInterval);
  scoreEl.textContent = timeLeft;
}


//Saves the score and initials
function saveScore() {
  var initials = document.getElementById("initial-input").value;
  var scoreList = document.createElement("ul")
  var initialList = document.createElement("li")

  localStorage.setItem(timeLeft, initials);

  initialsBTN.addEventListener("click", saveScore);
}


//Click events for the buttons on the quiz
buttonA.addEventListener("click", function(){
  selectAnswer(buttonA.textContent);
}),
buttonB.addEventListener("click", function(){
  selectAnswer(buttonB.textContent);
}),
buttonC.addEventListener("click", function(){
  selectAnswer(buttonC.textContent);
}),
buttonD.addEventListener("click", function(){
  selectAnswer(buttonD.textContent);
}),


startBtn.addEventListener("click", setTime);
startBtn.addEventListener("click", startGame);
