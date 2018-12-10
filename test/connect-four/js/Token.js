class Token {
    constructor(owner, id) {
        this.owner = owner;
        this.id = `token-${id}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    }

    drawHTMLToken() {
        const token = document.createElement('div');
        document.querySelector('#game-board-underlay').appendChild(token);
        token.setAttribute('id',this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.color;
    }

    moveLeft() {
        if(this.columnLocation > 0) {
            this.htmlToken.style.left = this.offsetLeft - 76;
            this.columnLocation -= 1;
        }
    }

    moveRight(columns) {
        if(this.columnLocation < columns - 1) {
            this.htmlToken.style.left = this.offsetLeft + 76;
            this.columnLocation += 1;
        }
    }

    drop(target, reset) {
        this.dropped = true;
        $(this.htmlToken).animate({
            top: (target.y * target.diameter)
        }, 750, 'easeOutBounce', reset);
    }

    get htmlToken() {
        return document.getElementById(this.id);
    }

    get offsetLeft() {
        return this.htmlToken.offsetLeft;
    }
}

// function Token(owner, id) {
//     this.owner = owner;
//     this.id = `token-${id}-${owner.id}`;
//     this.dropped = false;
//     this.columnLocation = 0;

//     this.drawHTMLToken = function() {
//         const token = document.createElement('div');
//         token.setAttribute('id',this.id);
//         token.setAttribute('class', 'token');
//         token.style.backgroundColor = this.owner.color;
//         document.querySelector('#game-board-underlay').appendChild(token);
//     }

//     this.htmlToken = function() {
//         return document.getElementById(this.id);
//     }

//     this.offsetLeft = function() {
//         return this.htmlToken().offsetLeft;
//     }

//     this.moveLeft = function() {
//         if(this.columnLocation > 0) {
//             this.htmlToken().style.left = `${this.offsetLeft() - 76}px`;
//             this.columnLocation -= 1;
//         }
//     }

//     this.moveRight = function(columns) {
//         if(this.owner.activeToken().columnLocation < columns - 1) {
//             this.htmlToken().style.left = `${this.offsetLeft() + 76}px`;
//             this.columnLocation += 1;
//         }
//     }

//     this.drop = function(target, reset) {
//         this.dropped = true;
//         $(this.htmlToken()).animate({
//             top: (target.y * target.diameter)
//         }, 750, 'easeOutBounce', reset);
//     }
// }
