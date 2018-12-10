// Player must guess a number between min and max
// Player gets a certain amount of guess
// Display guesses remaining
// Display if player gets the right number
// Let player play again

// Game State Values
let min = 1, 
    max = 20,
    guessesLeft = 3,
    winning = getRandomNumber(min,max);

// UI Elements
const gameWrapper = document.querySelector('.container');

const minNum = gameWrapper.querySelector('.min-num');
const maxNum = gameWrapper.querySelector('.max-num');
const userInput = gameWrapper.querySelector('input#guess');
const gameForm = gameWrapper.querySelector('form');
const userMsg = gameWrapper.querySelector('p.user-msg');
const gameBtn = gameWrapper.querySelector('#form-btn');

// Assign min and max
minNum.textContent = min;
maxNum.textContent = max;

function checkGuess(e) {

    let guess = parseInt(userInput.value);

    // validation
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // check win
    if(guess === winning) {
        gameOver(true, `${winning} is correct, YOU WIN!`)
    } else {
        // wrong number
        guessesLeft--;
        if(guessesLeft <= 0) {
            gameOver(false, `Game over, you lost. The correct number was ${winning}.`)
        } else {
            userInput.value = '';
            setMessage(`${guess} is incorrect. You have ${guessesLeft} guesses remaining`, 'orange');
        }
    }

    e.preventDefault();
}

function setMessage(msg, color) {
    userMsg.textContent = msg;
    userMsg.style.color = color;
}

// game state function
function gameOver(won, msg) {
    // should disable regardless of win/lose
    userInput.disabled = true;

    let color = won === true ? 'green' : 'red';

    userInput.style.borderColor = color;

    setMessage(msg, color);

    gameBtn.value = 'Play Again?';
    gameBtn.classList.add('play-again');
}

function playAgain(e) {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

gameForm.addEventListener('submit', checkGuess);
gameForm.addEventListener('mousedown', playAgain);