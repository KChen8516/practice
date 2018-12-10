// ELEMENTS
const cvs = document.querySelector('.tetris');

// create a context to draw a shape
const ctx = cvs.getContext('2d');

// VARIABLES
const GRID_SIZE = 20;
const ROWS = 20;
const COLUMNS = 10;
const VACANT = 'white';
let board = [];
const PIECES = [[Z, 'red'],[S, 'green'],[T, 'cyan'],[O, 'indigo'],[I,'blue'],[L,'purple'],[J,'orange']];


// EVENTS
document.addEventListener('keydowb', movePiece);


// FUNCTIONS
function drawSquare(x, y, color) {
    ctx.fillStyle = color;
    // X position, Y position, length, height
    ctx.fillRect(x*GRID_SIZE, y*GRID_SIZE, GRID_SIZE, GRID_SIZE);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x*GRID_SIZE, y*GRID_SIZE, GRID_SIZE, GRID_SIZE);
}

function initializeBoard() {
    // build a 2D array of colors
    for(let i=0; i<ROWS; i++) {
        board[i] = []
        for(let k=0; k<COLUMNS; k++) {
            board[i][k] = VACANT;
        }
    }
}

function drawBoard() {
    // update the canvas at each coordinate with the 2D board color
    for(let i=0; i<ROWS; i++) {
        for(let k=0; k<COLUMNS; k++) {
            drawSquare(k, i, board[i][k]);
        }
    }
}

function randomPiece() {
    let rand = Math.floor(Math.random() * PIECES.length);
    return new Piece(PIECES[rand][0], PIECES[rand][1]);
}

function movePiece(e) {
    if(e.keyCode === 37) {
        piece.moveLeft();
    } else if(e.keyCode === 38) {
        // UP
        piece.rotate();
    } else if(e.keyCode === 39) {
        piece.moveRight();
    } else if(e.keyCode === 40) {
        piece.moveDown();
    }
}

function Piece(type, color) {
    // each piece will be a 2D array 
        // each piece will have an array of pieces
    this.type = type;
    this.typeN = 0;

    this.activePiece = this.type[this.typeN];
    this.color = color;

    this.x = 0;
    this.y = 0;
}

Piece.prototype.draw = function() {
    for(let i=0; i<this.activePiece.length; i++) {
        for(let k=0; k<this.activePiece[0].length; k++) {
            if(this.activePiece[i][k]) {
                drawSquare(this.x + k, this.y + i, this.color);
            }
        }
    }
}

Piece.prototype.unDraw = function() {
    for(let i=0; i<this.activePiece.length; i++) {
        for(let k=0; k<this.activePiece[0].length; k++) {
            if(this.activePiece[i][k]) {
                drawSquare(this.x + k, this.y + i, VACANT);
            }
        }
    }
}

Piece.prototype.collision = function(x, y, piece) {
    // check if the update moves along with the given piece would result in a collision
    for(let i=0; i<piece.length; i++) {
        for(let k=0; k<piece[0].length; k++) {
            if(piece[i][k] === 1) {
                let newX = this.x + k + x;
                let newY = this.y + i + y;

                if(newX < 0 || newX > COLUMNS || newY > ROWS) {
                    // out of bounds
                    return true;
                }

                if(newY < 0) { continue; }

                if(board[newX][newY] !== VACANT) { return true; }
            }
        }
    }
    return false;
}

Piece.prototype.moveDown = function() {
    if(!this.collision(0,1,this.activePiece)) {
        this.unDraw();
        this.y++;
        this.draw();
    } else {

    }
}

Piece.prototype.moveLeft = function() {
    if(!this.collision(-1, 0, this.activePiece)) {
        this.unDraw();
        this.x--;
        this.draw();
    } else {

    }
}

Piece.prototype.moveLeft = function() {
    if(!this.collision(1, 0, this.activePiece)) {
        this.unDraw();
        this.x++;
        this.draw();
    } else {

    }
}

Piece.prototype.rotate = function() {
    let nextPiece = this.type[(this.typeN + 1) % this.type.length];
    let kick = 0;
    // check if the collision rotation hits a wall
    if(this.collision(0,0, nextPiece)) {
        if(this.x > COLUMNS/2) {
            kick = -1;
        } else {
            kick = 1;
        }
    }
    if(!this.collision(kick,0, nextPiece)) {
        this.unDraw();
        this.x += kick;
        this.typeN = (this.typeN + 1) % this.type.length;
        this.activePiece = this.type[this.typeN];
        this.draw();
    }
}

Piece.prototype.lock = function() {
    for(let i=0; i<this.activePiece.length; i++) {
        for(let k=0; k<this.activePiece.length; k++) {
            if(!this.activePiece[i][k]) {
                continue;
            }

            if(this.y+i < 0) {
                // GAME OVER
                break;
            }

            board[this.y+i][this.x+k] = this.color;
        }
    }
}
