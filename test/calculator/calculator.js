// VARIABLES
let runningTotal = 0;
let buffer = '0';
let prevOperator = null;

// ELEMENTS
const calculatorButtons = document.querySelector('.calculator__buttons');
const screen = document.querySelector('.screen');

// EVENTS
calculatorButtons.addEventListener('click', function(ev) {
    buttonClick(ev.target.textContent);
});

// FUNCTIONS
function buttonClick(value) {
    if(isNaN(parseInt(value))) {
        // handle symbol
        handleSymbol(value);
    } else {
        // handle number
        handleNumber(value);
    }
    reRender();
}

function handleNumber(num) {
    if(buffer === '0') {
        buffer = num;
    } else {
        buffer += num;
    }
    // render buffer
    reRender();
}

function handleSymbol(value) {
    switch(value) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            prevOperator = null;
            break;
        case '=':
            if(prevOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            prevOperator = null;
            buffer = '' + runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if(buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length-1);
            }
            break;
        default:
            // arithmetic operations
            handleMath(value);
            break;
    }
}

function reRender() {
    screen.innerText = buffer;
}

function handleMath(value) {
    const intBuffer = parseInt(buffer);
    if(runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    prevOperator = value;
    buffer = '0';
}

function flushOperation(intBuffer) {
    if(prevOperator === '+') {
        runningTotal += intBuffer;
    } else if(prevOperator === '-') {
        runningTotal -= intBuffer;
    } else if(prevOperator === '✕') {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
}