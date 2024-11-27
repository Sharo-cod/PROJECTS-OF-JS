const randomNumber = (parseInt(Math.random() * 100 + 1));
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrhi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')



let prevGuess = []
let numGuess = 1

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })    
}
function validateGuess(guess){
    if (isNaN(guess)) {
        alert('Please Enter A Valid Number')
    } else if(guess < 1){
        alert('Please Enter A Number More Than 1')
    }else if(guess > 100){
        alert('Please Enter A Number Less Than 100')
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number Was ${randomNumber}`)
            endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // 
}

function displayGuess(guess){
    // 
}

function displayMessage(message){
    // 
}




function endGame() {
    //
}

function newGame(){
//
}