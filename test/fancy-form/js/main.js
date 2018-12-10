// Track a list of questions for the form
const questions = [
    {question: 'Enter your favorite movie'},
    {question: 'Enter your favorite actress'},
    {question: 'Enter your favorite genre'},
    {question: 'Enter your favorite book'},
    {question: 'Enter your email', pattern: /\S+@\S+\.\S+/},
    {question: 'Create a password', type: 'password'},
];

// Transition times (ms)
const shakeFormTime = 100;
const switchQuestionTime = 200;

// Initialize position of question
let questionPos = 0;

// DOM els
const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');

// EVENTS
document.addEventListener('DOMContentLoaded', getQuestion);

nextBtn.addEventListener('click', validateForm);

inputField.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) validateForm();
});

// FUNCTIONS
function getQuestion() {
    // update form with question
    inputLabel.innerHTML = questions[questionPos].question;
    // check for type, default text
    inputField.type = questions[questionPos].type || 'text';
    // store the answer
    inputField.value = questions[questionPos].answer || '';
    inputField.focus();

    // set progress bar width relative to questions arr
    progress.style.width = (questionPos * 100) / questions.length + '%';

    // user icon or back arrow if its the first question
    prevBtn.className = questionPos ? 'fas fa-arrow-left':'fas fa-user';

    showQuestion();
}

function showQuestion() {
    inputGroup.style.opacity = 1;
    // width was transitioned
    inputProgress.style.transition = '';
    inputProgress.style.width = '100%';
}

function hideQuestion() {
    inputGroup.style.opacity = 0;
    inputLabel.style.marginLeft = 0;
    inputProgress.style.width = 0;
    inputProgress.style.transition = 'none';
    inputGroup.style.border = null;
}

function validateForm() {
    // make sure it's not empty
    // if there's a question pattern, match it
    if(!inputField.value.match(questions[questionPos].pattern || /.+/)) {
        validateFail();
    } else {
        validatePass();
    }
}

function validateFail() {
    // animate form shaking
    formBox.className = 'error';
    // Loop animation
    for(let i = 0; i < 6; i++) {
        // 6 for 3 forwards and backwards movements
        setTimeout(shakeMotion, shakeFormTime * i, ((i%2) * 2 -1) * 20, 0);
        setTimeout(shakeMotion, shakeFormTime * 6, 0, 0);
        inputField.focus();
    }
}

function validatePass() {
    questions[questionPos].answer = inputField.value;

    formBox.className = '';
    setTimeout(shakeMotion, shakeFormTime * 0, 0, 10);
    setTimeout(shakeMotion, shakeFormTime * 1, 0, 0);

    // move to the next position
    questionPos++;
    // hide current get next
    if(questions[questionPos]) {
        hideQuestion();
        getQuestion();
    } else {
        // remove the form since you're done
        hideQuestion();
        formBox.className = 'close';
        progress.style.width = '100%';

        formComplete();
    }
}

// Transform for shake motion
function shakeMotion(x, y) {
    formBox.style.transform = `translate(${x}px, ${y}px)`;
}

function formComplete() {
    // create the form completion message
    const h1 = document.createElement('h1');
    h1.classList.add('end');
    h1.appendChild(document.createTextNode(`Thanks ${questions[0].answer}, you are registered!`));
    // fade the message
    setTimeout(()=>{
        formBox.parentElement.appendChild(h1);
        setTimeout(() => {
            h1.style.opacity = 1;
        }, 50);
    }, 1000);

    console.log(questions);
}