
let words =           
    [
        "vibes",
        "bliss",
        "love",
        "energy",
    ];

let currentWord;
let allLetters = []
let allGuesses = []
let maxTries = 10;      

const letterBtns = document.querySelectorAll('#letters button');
const dashSection = document.querySelector('section');
const guessEl = document.getElementById('guess');
const congrats = document.querySelector('h2');
const newGameButton = document.getElementById('newGame');

document.getElementById('letters').addEventListener('click', letterClicker);
newGameButton.addEventListener('click', init); 

// hangmanImg = document.getElementsByTagName('section');


function letterClicker(e){
    var guessedLetter = e.target.innerHTML
    allGuesses.push(guessedLetter)
    render()
    for(var i = 0; i < currentWord.length; i++) {
        if(currentWord[i] == guessedLetter.toLowerCase()){
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

function init() {
    allGuesses = []
    congrats.innerHTML = ''
    var index = Math.floor(Math.random() * (words.length)); 
    currentWord = words[index]
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

    if (allLetters.join('') == currentWord){
        congrats.innerHTML = "YOU WIN"
    }
    
    if(allGuesses.length > maxTries){
        congrats.innerHTML = "YOU LOSE"
    }
}
