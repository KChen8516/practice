// ELEMENTS
const canvas = document.getElementById('snake-canvas');
const ctx = canvas.getContext('2d');
let snake;
let food;
let gameOver = false;

// VARIABLES
const TILES_PER_ROW = 15;
const FPS = 3;

// EVENTS
document.addEventListener('DOMContentLoaded', startGame);

document.addEventListener('keydown', function(e) {
    switch(e.which) {
        case 37:
            snake.changeDirection('l');
            break;
        case 38:
            snake.changeDirection('u');
            break;
        case 39:
            snake.changeDirection('r');
            break;
        case 40:
            snake.changeDirection('d');
            break;
    }
});

// FUNCTIONS

function startGame() {
    snake = new Snake(canvas.clientWidth/TILES_PER_ROW, ctx, TILES_PER_ROW);
    food = new Food(snake.size, TILES_PER_ROW);
    draw();
    snake.draw();

    let gameCounter = setInterval(updateGame, 700);
}

function updateGame() {
    // move the snake
    // snake.move();

    // check for collisions
    if(snake.eatFood(food)) {
        snake.addBody();
        food.newPos();
    }
    snake.update();
    // redraw the board
    draw();

    // check for gameover
    if(!snake.bodyCollision() && !snake.outOfBounds()) {
        snake.draw();
    } else {
        console.log('GAME OVER');
    }
}

function draw() {
    // erase the board
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 675, 750);
    // redraw the background
    ctx.fillStyle = 'black';
    ctx.rect(0,0, 675, 750);
    ctx.stroke();

    ctx.fillStyle = 'blue';
    ctx.fillRect(food.posX * food.size, food.posY * food.size, food.size, food.size);
}

function Snake(size, ctx, tileCount) {
    // starting position
    this.posX = 3;
    this.posY = 1;
    this.size = size;
    this.ctx = ctx;
    this.tileCount = tileCount;

    // track the direction 'l', 'u', 'd', 'r'
    this.dir = 'l'; 
    this.body = [];

    this.changeDirection = function(newDir) {
        this.dir = newDir;
    }

    this.move = function() {
        switch(this.dir) {
            case 'l':
                this.posX -= 1;
                break;
            case 'u':
                this.posY -= 1;
                break;
            case 'r':
                this.posX += 1;
                break;
            case 'd':
                this.posY += 1;
                break;
            default:
                break;
        }
    }

    this.draw = function() {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.posX * this.size, this.posY * this.size, this.size, this.size);

        // draw the snake body
        this.body.forEach(part => {
            this.ctx.fillStyle = 'green';
            this.ctx.fillRect(part.posX * this.size, part.posY * this.size, this.size, this.size);
        });
    }

    this.addBody = function() {
        this.body.unshift(new Body(this.posX, this.posY, this.size));
    }

    this.updateBody = function() {
        if(this.body.length > 0) {
            this.body.pop();
            this.addBody();
        }
    }

    this.update = function() {
        this.updateBody();
        this.move();
        console.log(this.posX, this.posY);
    }

    this.eatFood = function(food) {
        return food.posX === this.posX && food.posY === this.posY;
    }

    this.bodyCollision = function() {
        let collide = false;
        this.body.forEach(part => {
            if(part.posX === this.posX && part.posY === this.posY) collide = true;
        });
        return collide;
    }

    this.outOfBounds = function() {
        return this.posX < 0 || this.posY < 0 || this.posX > 14 || this.posY > 13;
    }
}

function Body(posX, posY, size) {
    this.posX = posX;
    this.posY = posY;
    this.size = size;
}

function Food(size, tileCount) {
    this.posX = Math.floor(Math.random() * tileCount);
    this.posY = Math.floor(Math.random() * tileCount);
    this.size = size;
    this.tileCount = tileCount;

    this.newPos = function() {
        this.posX = Math.floor(Math.random() * this.tileCount);
        this.posY = Math.floor(Math.random() * this.tileCount);
    }
}