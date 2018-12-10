// ELEMENTS
const root = document.documentElement;
const gallery = document.querySelector('.gallery');

// VARIABLES
root.style.setProperty('--image-count', gallery.children.length);
let x0 = null;
let i = 0;
let locked = false;
let windowWidth = null;

// EVENTS
gallery.addEventListener('mousedown', lock);
gallery.addEventListener('touchstart', lock);

gallery.addEventListener('touchmove', function(e) {e.preventDefault()});
gallery.addEventListener('touchmove', drag);
gallery.addEventListener('mousemove', drag);

gallery.addEventListener('mouseup', move);
gallery.addEventListener('touchend', move);

window.addEventListener('resize', setWindowSize);
setWindowSize();

// FUNCTIONS
function unifyEvents(e) {
    // if it's a touch event, return the first item
    return e.changedTouches ? e.changedTouches[0] : e;
}

function lock(e) {
    // set the initial interaction position
    x0 = unifyEvents(e).clientX;
    // toggle smooth
    gallery.classList.toggle('smooth', !(locked = true));
}

function move(e) {
    if(locked) {
        let diff = unifyEvents(e).clientX - x0;
        let direction = Math.sign(diff);
        // compute the fraction of distance dragged relative to window
        let f = +(direction * diff / windowWidth).toFixed(2);

        if((i > 0 || direction < 0) && (i < gallery.children.length - 1 || direction > 0)) {
            gallery.style.setProperty('--i', i -= direction);
            f = 1 - f;
        }

        // always reset the dragging distance
        gallery.style.setProperty('--tx', '0px');
        gallery.style.setProperty('--f', f);
        gallery.classList.toggle('smooth', !(locked = false));

        x0 = null;
    }
}

function drag(e) {
    console.log('dragging', locked);
    e.preventDefault();
    if(locked) {
        gallery.style.setProperty('--tx', `${Math.round(unifyEvents(e).clientX - x0)}px`);
    }
}

function setWindowSize() {
    windowWidth = window.innerWidth;
}