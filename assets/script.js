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

<<<<<<< Updated upstream
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


// scoreboard demo functionality (Jung)
var game = 5;
var nextGame = 10;

function something() {
    var someArray = JSON.parse(localStorage.getitem('score'));
    someArray.push(value);
    localStorage.setItem('score',JSON.stringify(someArray));
};

function arrangeScore() {
    var someArray = json.parse(localStorage.getitem('score'));
}
// .sort
=======
itself.innerHTML = "<button> Start Quiz </button>";
itself.addEventListener("Click", quiz);

var letterChoice = quiz() {
    itself.innerText = "New Words";
    
    // itself.innerHTML = "<label>Question</label> <field>Answer\</field>";
    answerValidate();
}

var answerValidate(letterChoice) {
    // look back at timer mechanism from unit 4 activities
    if letterChoice.value && timer.value > 0;
}
>>>>>>> Stashed changes
