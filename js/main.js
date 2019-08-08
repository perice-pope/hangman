// variables... 

console.log("JS LOADED")
var words =           // Words
    [
        "vibes",
        "bliss",
        "love",
        "energy",
    ];

var currentWord;
var allLetters = []
var allGuesses = []
let maxTries = 10;            // Maximum number of tries player has

const letterBtns = document.querySelectorAll('#letters button');
const dashSection = document.querySelector('section');
const guessEl = document.getElementById('guess');
const congrats = document.querySelector('h2');
const newGameButton = document.getElementById('newGame');

document.getElementById('letters').addEventListener('click', letterClicker);
newGameButton.addEventListener('click', init); 

// Reset our game-level variables

function letterClicker(e){
    var guessedLetter = e.target.innerHTML
    console.log(guessedLetter)
    console.log(currentWord)
    allGuesses.push(guessedLetter)
    console.log(allGuesses, "ALL OF EM")
    render()
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
    winnerCheck()
}

function init(){
    allGuesses = []
    congrats.innerHTML = ''
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
function winnerCheck() {
    var rightGuess = currentWord.split('')
    var checker = 0
    console.log(allGuesses)
    if (allLetters.join('') == currentWord){
        congrats.innerHTML = "YOU WIN"
    }
    console.log(allGuesses, "IN WINNER FUNC")
    if(allGuesses.length > maxTries){
        congrats.innerHTML = "YOU LOSE"
    }

}

    // Use Math.floor to round the random number down to the nearest whole.
