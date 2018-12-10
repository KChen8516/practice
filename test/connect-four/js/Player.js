class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    /**
     * Creates token objects for player
     * @param     {number}    num - Number of token objects to be created
     * @returns   {Array}     An array of the newly created token objects
     */
    createTokens(num) {
        let tokens = [];
        for(let i=0; i<num; i++) {
            tokens.push(new Token(this, i));
        }
        return tokens;
    }

    checkTokens() {
        return this.unusedTokens.length === 0 ? false : true;
    }

    get unusedTokens() {
        return this.tokens.filter(token => !token.dropped);
    }

    get activeToken() {
        return this.unusedTokens[0];
    }
}

// function Player(name, id, color, active) {
//     this.name = name;
//     this.id = id;
//     this.color = color;
//     this.active = active || false;
//     this.tokens = createTokens.call(this, 21);
    
//     function createTokens(num) {
//         let tokens = [];
//         for(let i=0; i<num; i++) {
//             tokens.push(new Token(this, i));
//         }
//         return tokens;
//     }

//     this.unusedTokens = function() {
//         return this.tokens.filter(token => token.dropped === false);
//     }

//     this.activeToken = function() {
//         return this.unusedTokens()[0];
//     }

//     this.checkTokens = function() {
//         return this.unusedTokens().length === 0 ? false : true;
//     }
// }