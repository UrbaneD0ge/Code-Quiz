var quiz = document.querySelector('.quiz');
var question = document.querySelector('.question');
var answer = document.querySelector('.answer');
var button = document.getElementById('startQuiz');
var finalScore = document.querySelector('#scoreBox');
var timer = document.querySelector('#elapse')
var highScores = [];
var score = '';
// var timeRemaining = 0;
var win = false;
var lose = false;
var response;

button.addEventListener('click',startQuiz);

const qBank = {Q1:"What is the letter?",A1:["A","B","C","D"],Q2:"What is the color?",A2:["red","orange","yellow","blue"],Q3:"What is the fruit?",A3a:["Pineapple","Mango","Banana","Raspberry"]}
const aBank = ["A1c", "A2d", "A3a"];

function startQuiz() {
    button.style.display = 'none';
    // timer.style.display = 'none';
    quiz.textContent = qBank.Q1;
    for (response of qBank.A1) {
        var newLi = document.createElement('button');
        newLi.innerHTML = response;
        answer.appendChild(newLi);
    }
    clock();
}

// Countdown Timer
var timeRemaining = 5;
console.log(timer)
function clock() {
    var timeInterval = setInterval(function() {
        timer.textContent = timeRemaining;
        if (timeRemaining > 1) {
            timer.textContent = timeRemaining;
            timeRemaining--;
        } else if (timeRemaining == 1) {
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
    }, 1000);
}

function lose() {
    button.style.display = 'show';
}