let wrapper = document.querySelector('.wrapper');
let topLayer = wrapper.querySelector('.top');
let handle = wrapper.querySelector('.handle');
let skew = 0;
let delta = 0;
let isDown = false;
let target = false;

document.addEventListener('DOMContentLoaded', function() {

    if(wrapper.classList.contains('skewed')) {
        skew = 1000;
    }

});

document.addEventListener('mousedown', function() { isDown = true; })
document.addEventListener('mouseup', function() { 
    isDown = false; 
    target = false;
});

handle.addEventListener('mousedown', function() { 
    console.log('targeted');
    target = true; 
});

wrapper.addEventListener('mousemove', function(ev) {
    if(isDown && target) {
        console.log('dragging');
        // get the diff between mouse and center point
        delta = (ev.clientX - window.innerWidth / 2) * 0.5;
    
        handle.style.left = ev.clientX + delta + 'px';
        topLayer.style.width = ev.clientX + skew + delta + 'px';
    }
});