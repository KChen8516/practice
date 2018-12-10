// ELEMENTS
const minHand = document.querySelector('.stopwatch__hand--minutes');
const secHand = document.querySelector('.stopwatch__hand--seconds');
const timeLeft = document.querySelector('.display-time__left');
const timeEnd = document.querySelector('.display-time__end');

// VARIABLES

// EVENTS

// FUNCTIONS
function timer(seconds) {
    
    // calculate the end time in ms
    const now = Date.now();
    const then = now + seconds * 1000;

    // display the end time
    // displayEndTime(then);
    // display time left
    // displayTimeLeft(seconds);
    // show stopwatch time
    updateStopWatch(seconds);

    // create an interval
    setInterval(function() {
        console.log('counting');
        // subtract the set end time from the current time
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(seconds < 0) {
            // clear the interval
            return;
        }
        console.log(then, secondsLeft);
        // displayTimeLeft(secondsLeft);
        updateStopWatch(secondsLeft);
    }, 1000);
}

function updateStopWatch(seconds) {
    // determine the minutes and seconds
    const minutes = Math.floor(seconds/60);
    const secs = seconds % 60;

    // console.log({minutes, secs});

    const minDeg = 90 + (minutes / 60 ) * 360;
    const secDeg = 90 + (secs/60) * 360;

    minHand.style.transform = `rotate(${minDeg}deg)`;
    secHand.style.transform = `rotate(${secDeg}deg)`;
}

// updateStopWatch(1000);
timer(1000);

