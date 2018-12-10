class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    /** 
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
     */
    createPlayers() {
        const players = [];
        players.push(new Player('Judy', 10, '#e15258', true));
        players.push(new Player('Girth', 5, '#e59a13'));
        return players;
    }

    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    get activePlayer() {
        return this.players.find(player => player.active);
    }

    handleKeyDown(e) {
        if(this.ready) {
            if(e.key === 'ArrowRight') {
                this.activePlayer.activeToken.moveRight(7);
            } else if(e.key === 'ArrowDown') {
                this.playToken();
            } else if(e.key === 'ArrowLeft') {
                this.activePlayer.activeToken.moveLeft();
            }
        }
    }

    playToken() {
        const spaces = this.board.spaces;
        const activeToken = this.activePlayer.activeToken;
        const targetCol = spaces[activeToken.columnLocation];
        let targetSpace = null;

        for(let space of targetCol) {
            if(space.token === null) {
                targetSpace = space;
            }
        }

        if(targetSpace !== null) {
            this.ready = false;
            let game = this;
            activeToken.drop(targetSpace, function() {
                game.updateGameState(activeToken, targetSpace);
            });
        }
    }

    checkForWin(target) {
        const owner = target.token.owner;
        let win = false;

        // vertical
        for (let x = 0; x < this.board.columns; x++ ){
            for (let y = 0; y < this.board.rows - 3; y++){
                if (this.board.spaces[x][y].owner === owner && 
                    this.board.spaces[x][y+1].owner === owner && 
                    this.board.spaces[x][y+2].owner === owner && 
                    this.board.spaces[x][y+3].owner === owner) {
                        win = true;
                }           
            }
        }

        // horizontal
        for (let x = 0; x < this.board.columns - 3; x++ ){
            for (let y = 0; y < this.board.rows; y++){
                if (this.board.spaces[x][y].owner === owner && 
                    this.board.spaces[x+1][y].owner === owner && 
                    this.board.spaces[x+2][y].owner === owner && 
                    this.board.spaces[x+3][y].owner === owner) {
                        win = true;
                }           
            }
        }

        // diagonal
        for (let x = 3; x < this.board.columns; x++ ){
            for (let y = 0; y < this.board.rows - 3; y++){
                if (this.board.spaces[x][y].owner === owner && 
                    this.board.spaces[x-1][y+1].owner === owner && 
                    this.board.spaces[x-2][y+2].owner === owner && 
                    this.board.spaces[x-3][y+3].owner === owner) {
                        win = true;
                }           
            }
        }

        // diagonal
        for (let x = 3; x < this.board.columns; x++ ){
            for (let y = 3; y < this.board.rows; y++){
                if (this.board.spaces[x][y].owner === owner && 
                    this.board.spaces[x-1][y-1].owner === owner && 
                    this.board.spaces[x-2][y-2].owner === owner && 
                    this.board.spaces[x-3][y-3].owner === owner) {
                        win = true;
                }           
            }
        }

        return win;
    }

    switchPlayers() {
        for(let player of this.players) {
            player.active = player.active === true ? false : true;
        }
    }

    gameOver(message) {
        document.getElementById('game-over').textContent = message;
        document.getElementById('game-over').style.display = 'block';
    }

    updateGameState(token, target) {
        target.mark(token);

        if(!this.checkForWin(target)) {
            this.switchPlayers();

            if(this.activePlayer.checkTokens()) {
                this.activePlayer.activeToken.drawHTMLToken();
                this.ready = true;
            } else {
                this.gameOver('No more tokens.');
            }
        } else {
            this.gameOver(`${target.owner.name} wins!`);
        }
    }
}

// function Game() {
//     this.board = new Board();
//     this.players = createPlayers();
//     this.ready = false;

//     function createPlayers() {
//         const players = [];
//         players.push(new Player('Judy', 10, '#e15258', true));
//         players.push(new Player('Girth', 5, '#e59a13'));
//         return players;
//     }

//     this.startGame = function() {
//         this.board.drawHTMLBoard();
//         this.activePlayer().activeToken().drawHTMLToken();
//         this.ready = true;
//     }

//     this.activePlayer = function() {
//         return this.players.find(function(player){return player.active === true});
//     }

//     this.handleKeyDown = function(e) {
//         if(this.ready) {
//             if(e.key === 'ArrowRight') {
//                 this.activePlayer().activeToken().moveRight(7);
//             } else if(e.key === 'ArrowDown') {
//                 this.playToken();
//             } else if(e.key === 'ArrowLeft') {
//                 this.activePlayer().activeToken().moveLeft();
//             }
//         }
//     }

//     this.playToken = function() {
//         const currentCol = this.activePlayer().activeToken().columnLocation;
//         let targetSpace = null;
//         for(let space of this.board.spaces[currentCol]) {
//             if(space.token === null) targetSpace = space;
//         }
//         const colFull = this.board.spaces[currentCol].every(space => space.token !== null);
//         if(!colFull) {
//             let that = this;
//             this.activePlayer().activeToken().drop(targetSpace, function() {
//                 that.updateGameState.call(that, that.activePlayer().activeToken(), targetSpace);
//             });
//         }
//     }

//     this.switchPlayers = function() {
//         this.players.forEach(player => player.active = !player.active);
//     }

//     this.checkForWin = function(target) {
//         const owner = target.token.owner;
//         let win = false;

//         // vertical
//         for (let x = 0; x < this.board.spaces.length; x++ ){
//             for (let y = 0; y < this.board.spaces[x].length - 3; y++){
//                 if (this.board.spaces[x][y].owner === owner && 
//                     this.board.spaces[x][y+1].owner === owner && 
//                     this.board.spaces[x][y+2].owner === owner && 
//                     this.board.spaces[x][y+3].owner === owner) {
//                         win = true;
//                 }           
//             }
//         }

//         // horizontal
//         for (let x = 0; x < this.board.spaces.length - 3; x++ ){
//             for (let y = 0; y < this.board.spaces[x].length; y++){
//                 if (this.board.spaces[x][y].owner === owner && 
//                     this.board.spaces[x+1][y].owner === owner && 
//                     this.board.spaces[x+2][y].owner === owner && 
//                     this.board.spaces[x+3][y].owner === owner) {
//                         win = true;
//                 }           
//             }
//         }

//         // diagonal
//         for (let x = 3; x < this.board.spaces.length; x++ ){
//             for (let y = 0; y < this.board.spaces[x].length - 3; y++){
//                 if (this.board.spaces[x][y].owner === owner && 
//                     this.board.spaces[x-1][y+1].owner === owner && 
//                     this.board.spaces[x-2][y+2].owner === owner && 
//                     this.board.spaces[x-3][y+3].owner === owner) {
//                         win = true;
//                 }           
//             }
//         }

//         // diagonal
//         for (let x = 3; x < this.board.spaces.length; x++ ){
//             for (let y = 3; y < this.board.spaces[x].length; y++){
//                 if (this.board.spaces[x][y].owner === owner && 
//                     this.board.spaces[x-1][y-1].owner === owner && 
//                     this.board.spaces[x-2][y-2].owner === owner && 
//                     this.board.spaces[x-3][y-3].owner === owner) {
//                         win = true;
//                 }           
//             }
//         }

//         return win;
//     }

//     this.gameOver = function(message) {
//         document.getElementById('game-over').textContent = message;
//         document.getElementById('game-over').style.display = 'block';
//     }

//     this.updateGameState = function(token, target) {
//         target.mark(token);
//         if(!this.checkForWin(target)) {
//             this.switchPlayers();

//             if(this.activePlayer().checkTokens()) {
//                 this.activePlayer().activeToken().drawHTMLToken();
//             }
//         } else {
//             this.gameOver(`${target.owner.name} wins!`);
//         };
//     }
// }