// variables... 

console.log("JS LOADED")
var words =           // Words
    [
        "happiness",
        "bliss",
        "love",
        "energy",
    ];

var currentWord;
var allLetters = []
const maxTries = 10;            // Maximum number of tries player has

const letterBtns = document.querySelectorAll('#letters button');
const dashSection = document.querySelector('section');
const guessEl = document.getElementById('guess');
const msgEl = document.querySelector('h2');
const newGameButton = document.getElementById('newGame');

document.getElementById('letters').addEventListener('click', letterClicker);
newGameButton.addEventListener('click', init); 

// Reset our game-level variables

function letterClicker(e){
    var guessedLetter = e.target.innerHTML
    console.log(guessedLetter)
    console.log(currentWord)
    for(var i = 0; i < currentWord.length; i++){
        if(currentWord[i] == guessedLetter.toLowerCase()){
            console.log(guessedLetter, "HELLOOO")
            allLetters[i] = guessedLetter.toLowerCase()
            render()
        } else {

        }
    }
}

function render(){
    dashSection.innerHTML = ''
    allLetters.forEach(l => {
        dashSection.innerHTML += l
    })
}

function init(){
    var index = Math.floor(Math.random() * (words.length)); // thankyou overflow...
    currentWord = words[index]
    console.log(currentWord)
    dashSection.innerHTML = ''
    allLetters = []
    currentWord.split('').forEach(l =>{
        allLetters.push('_ ')
    })
    render()

}
function resetGame() {
    remainingGuesses = maxTries;
    gameStarted = false;
}

    // Use Math.floor to round the random number down to the nearest whole.
