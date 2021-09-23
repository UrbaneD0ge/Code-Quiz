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

button.addEventListener('click',startQuiz);

const qBank = {Q1:"What is the letter?",A1a:"A",A1b:"B",A1c:"C",A1d:"D",Q2:"What is the color?",A2a:"red",A2b:"orange",A2c:"yellow",A2d:"blue",Q3:"What is the fruit?",A3a:"Pineapple",A3b:"Mango",A3c:"Banana",A3d:"Raspberry"};

const aBank = ["A1c", "A2d", "A3a"];

function startQuiz() {
    button.style.display = 'none';
    // timer.style.display = 'none';
    quiz.textContent = qBank.Q1

    // answer.innerHTML.append('<li>' + 'Answer' )
    clock()
}

// Countdown Timer
var timeRemaining = 60;
console.log(timer)
function clock() {
    var timeInterval = setInterval(function() {
        timer.textContent = timeRemaining;
        if (timeRemaining > 1) {
            // timer.textContent = timeRemaining;
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