var itself = document.getElementById("quiz");
console.log("quiz");



itself.innerHTML = "<button> Start Quiz </button>";
itself.addEventListener("Click", quiz);

var quiz() {
    itself.innerText = "New Words";
    
    // itself.innerHTML = "<label>Question</label> <field>Answer\</field>";
}