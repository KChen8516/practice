const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.img-grid img');

const opacity = 0.4;

imgs[0].style.opacity = opacity;

// EVENTS
imgs.forEach(img => img.addEventListener('click', updateMainImg));

// FUNCTIONS
function updateMainImg(e) {

    imgs.forEach(img => img.style.opacity = 1);

    // update the main image
    current.src = e.target.src;

    // fadeIn animation
    current.classList.add('fade-in');

    // remove the fade-in class for future fadeIns
    setTimeout(() => current.classList.remove('fade-in'), 500);

    e.target.style.opacity = opacity;
}

