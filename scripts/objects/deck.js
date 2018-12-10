// Implement a function that returns a Deck object
// 1. Can shuffle cards
// 2. Can draw a card
// 3. Returns the amount of cards remaining
// 4. Keeps track of a hand, which grows as each card is drawn?

function Deck() {
    const suits = ['C', 'S', 'H', 'D'];
    const values = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
    const cards = createDeck();

    function createDeck() {
        let arr = [];
        for(let i=0; i<values.length; i++) {
            for(let k=0; k<suits.length; k++) {
                arr.push(values[i]+suits[k]);
            }
        }
        return arr;
    }
    
    // console.log(cards);

    // shuffle the current deck
    this.shuffleDeck = function() {
        // Fisher-Yates algo
        let currIdx = cards.length;
        let temp = null;
        let randIdx = null;

        // as long as there's something to shuffle
        while(0 !== currIdx) {
            // pick a random idx from remaining cards
            randIdx = Math.floor(Math.random() * currIdx);
            currIdx -= 1;

            // perform a swap
            temp = cards[currIdx];
            cards[currIdx] = cards[randIdx];
            cards[randIdx] = temp;
            // continues to randomly swap from the end of the arr
        }
        console.log(cards, cards.length);
    }

    this.drawCard = function() {
        return cards.pop();
    }

    this.resetDeck = function() {
        createDeck();
    }
}

const deckA = new Deck();
deckA.shuffleDeck();
deckA.resetDeck();
