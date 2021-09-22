var quiz = document.querySelector('.quiz');
var question = document.querySelector('.question');
var answer = document.querySelector('.answer');
var button = document.getElementById('startQuiz')
var finalScore = document.querySelector
button.addEventListener('click',startQuiz);

var timeRemaining = 0;
var highScores = [];
var score = '';
var win = false;
var lose = false;

const qBank = {Q1:"What is the letter?",A1a:"A",A1b:"B",A1c:"C",A1d:"D",Q2:"What is the color?",A2a:"red",A2b:"orange",A2c:"yellow",A2d:"blue",Q3:"What is the fruit?",A3a:"Pineapple",A3b:"Mango",A3c:"Banana",A3d:"Raspberry"}
// quiz.innerText = "NEW Words!";

function startQuiz() {
    quiz.style.display = 'none';
    button.style.display = 'none';
    quiz.textContent = "QQQ";
    clock()
    console.log(qBank[1])
    // question.innerText = qBank[1];
    // for(){answer.appendChild('<button>'+ )
}

// Countdown Timer
var timeRemaining = 120;

function clock() {
var timeInterval = setInterval(function() {
    if (timeRemaining > 1) {
        countdown.textContent = timeRemaining + 'seconds left';
        timeRemaining--;
    } else if (timeRemaining == 1) {
        countdown.textContent = timeRemaining + 'second left!!';
        timeRemaining--;
        } else {
            timeRemaining.textContent = '';
            clearInterval(timeInterval);
            // lose();
        }
    if (win == true) {
        clearInterval(timeInterval);
        score = timeRemaining;
        // finalScoreFunction
    }
, 1000);
}