/*

if(document.readyState === 'loading) {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

*/

// ELEMENTS
const overlays = document.querySelectorAll('.overlay-text');
const cards = document.querySelectorAll('.card');

// VARIABLES

// CLASSES

class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/Audio/creepy.mp3');
        this.flipSound = new Audio('assets/Audio/flip.wav');
        this.matchSound = new Audio('assets/Audio/match.wav');
        this.victorySound = new Audio('assets/Audio/victory.wav');
        this.gameOverSound = new Audio('assets/Audio/gameover.wav');

        // audio options
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }

    startMusic() {
        // this.bgMusic.play();
    }

    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }

    flip() {
        this.flipSound.play();
    }

    match() {
        this.matchSound.play();
    }

    victory() {
        this.stopMusic();
        this.victorySound.play();
    }

    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

class Memory { 
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.querySelector('#time-remaining');
        this.ticker = document.querySelector('#flips');
        this.audioController = new AudioController();
    }

    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;

        setTimeout(() => {
            this.audioController.startMusic();
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500);

        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
    }

    canFlipCard(card) {
        // animation finished, card not found, card !== card being checked
        return (!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck);
    }

    flipCard(card) {
        if(this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;

            // flip the card
            card.classList.add('visible');

            // check for match
            if(this.cardToCheck) {
                this.checkForMatch(card);
            } else {
                this.cardToCheck = card;
            }
        }
    }

    checkForMatch(card) {
        if(this.getCardType(card) === this.getCardType(this.cardToCheck)) {
            // match!
            this.cardMatch(card, this.cardToCheck);
        } else {
            // no match!
            this.misMatch(card, this.cardToCheck);
        }
        this.cardToCheck = null;
    }

    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        this.audioController.match();
        if(this.matchedCards.length === this.cardsArray.length) {
            this.victory();
        }
    }

    misMatch(card1, card2) {
        this.busy = true;
        // delay the turnaround
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000)
    }

    getCardType(card) {
        return card.querySelector('.card-value').src;
    }

    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }

    shuffleCards() {
        // Fischer-Yates shuffle
        for(let i=this.cardsArray.length-1; i>0; i--) {
            // multiply by whole number + 1 to account for floor
            let randIdx = Math.floor(Math.random() * (i+1));
            // changes the CSS Grid order
            this.cardsArray[randIdx].style.order = i;
            this.cardsArray[i].style.order = randIdx;
        }
    }

    startCountDown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if(this.timeRemaining === 0) this.gameOver();
        }, 1000);
    }

    victory() {
        clearInterval(this.countDown);
        this.audioController.victory();
        document.querySelector('#victory-text').classList.add('visible');
    }

    gameOver() {
        clearInterval(this.countDown);
        this.audioController.gameOver();
        document.querySelector('#game-over-text').classList.add('visible');
    }
}

// FUNCTIONS

function ready() {
    let game = new Memory(100, cards);

    // add events to overlays
    overlays.forEach(overlay => {
        overlay.addEventListener('click', function() {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', function() {
            game.flipCard(card);
        });
    });
}

ready();