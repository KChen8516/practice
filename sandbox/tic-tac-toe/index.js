/**
 * 1. Constraints? (format, online, players, AI, API)
 * 2. Rules of the game
 * 3. What interactions are necessary for the game? 
 *      What's the critical path or feature to optimize?
 * 4. Layout -> Interaction -> Logic
 */

//  1. Switch players between moves
//  2. Static grid layout
//  3. Game states: 
    // Current Player Turn
    // Win, Lose, Draw

// ELEMENTS
const gameState = document.querySelector('.game__status');
const currentPlayer = document.querySelector('.game__current-player span');
const gameBoard = document.querySelector('.game__board');
const squares = document.querySelectorAll('.square');

// VARIABLES
let x = true;
let o = false;
let winX = false;
let winO = false;

// EVENTS
gameBoard.addEventListener('click', clickSquare);

// FUNCTIONS
function clickSquare(ev) {
    let el = ev.target;
    if(el.classList.contains('square')) {
        el = el.firstElementChild;
    } 
    
    if(el.classList.contains('move') && el.textContent === '') {
        x ? el.textContent = 'X' : el.textContent = 'O';
        el.classList.add('occupied');
        togglePlayer();
        updateStatus();
    }
}

function togglePlayer() {
    x = !x;
    o = !o;
}

function updateStatus() {
    x ? currentPlayer.textContent = 'One (X)' : currentPlayer.textContent = 'Two (O)';
}


