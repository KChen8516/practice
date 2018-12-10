// ELEMENTS
const messageList = document.querySelector('.message-list');

// VARIABLES
const MESSAGE_API_URL = 'http://message-list.appspot.com/messages';
const DOMAIN = 'http://message-list.appspot.com';
let messages = [];
let pageToken = '';
let fetching = false;
let initialX = null;
let isDown = false;
let parent = null;
let removing = false;

// EVENTS
window.addEventListener('scroll', function(ev) {
    // console.log(window.scrollY,window.innerHeight);
    // console.log({scroll: messageList.scrollHeight, top: messageList.scrollTop, cHeight: messageList.clientHeight});
    // console.log(messageList.clientHeight);
    if((this.window.scrollY + this.window.innerHeight) >= (messageList.clientHeight * 0.8)) {
        if(!fetching) {
            fetching = true;
            fetchOnScroll();
            pageToken = '';
        }
    }
});

messageList.addEventListener('transitionend', function(ev) {
    console.log(ev);
    if(ev.propertyName === 'transform') {
        // removing = false;
        // console.log('removing')
        // messageList.removeChild(parent);
        parent.style.transform = 'translateX(0)';
        parent = null;
    }
});

messageList.addEventListener('mousedown', function(ev) {
    parent = getParent(ev.target);

    initialX = ev.clientX;
    isDown = true;
    // console.log('mouse', parent);
    console.log(ev.clientX, ev);
});

messageList.addEventListener('mousemove', function(ev) {
    ev.preventDefault();
    if(!isDown || removing) {
        return;
    }
    console.log(ev.clientX);
    let diff = ev.clientX - initialX;
    if(diff < 0) {
        return
    }
    // get the bounding position of the el being moved
    const {x} = parent.getBoundingClientRect();
    // change opacity as x reaches half of offsetWidth
    console.log('boundingClientX', x);
    console.log('offsetWidth', parent.offsetWidth);
    let delta = (parent.offsetWidth - x) / parent.offsetWidth;
    parent.style.opacity = (parent.offsetWidth - x) / parent.offsetWidth;
    parent.style.transform = 'scaleY('+delta+') ' + 'translateX('+diff+'px)';
    // parent.style.transform = 'translateX('+diff+'px)';

    if(delta <= .3) {
        console.log('remove');
        // removing = true;
        // parent.classList.add('remove');
        messageList.removeChild(parent);
        parent = null;
    } else {
        
    }
});

messageList.addEventListener('mouseup', function(ev) {
    isDown = false;

    parent.style.transform = 'translateX(0)';
    parent.style.opacity = 1;
    parent = null;
});

messageList.addEventListener('touchend', function(ev) {
    isDown = false;

    parent.style.transform = 'translateX(0)';
    parent.style.opacity = 1;
    parent = null;
});

messageList.addEventListener('touchstart', function(ev) {
    parent = getParent(ev.target);

    initialX = ev.changedTouches[0].clientX;
    isDown = true;
});

messageList.addEventListener('touchmove', function(ev) {
    console.log(ev.changedTouches[0]);
    let diff = ev.changedTouches[0].clientX - initialX;
    if(diff < 0) {
        return;
    }
    parent.style.transform = 'translateX('+diff+'px)';
    const {x} = parent.getBoundingClientRect();
    let delta = (parent.offsetWidth - x) / parent.offsetWidth;
    parent.style.opacity = delta;

    if(delta <= .3) {
        messageList.removeChild(parent);
        parent = null;
    }
});

// FUNCTIONS
function fetchMessages() {
    const msgData = fetch(MESSAGE_API_URL);

    msgData
        .then(function(response) { return response.json() })
        .then(function(data) { 
            displayMessage(data);
            console.log(data);
            pageToken = data.pageToken;
        });
}

function fetchOnScroll() {
    const scrollData = fetch(`${MESSAGE_API_URL}?pageToken=${pageToken}`);

    scrollData
        .then(function(response) { return response.json() })
        .then(function(data) {
            console.log(data);
            fetching = false;
            pageToken = data.pageToken;
            displayMessage(data);
        });
}

function displayMessage(data) {
    // fire when from API response
    const fragment = document.createDocumentFragment();
    messages = data.messages;

    console.log(messages);

    // build a message item for each one
    messages.forEach(msg => {
        // create and append to the fragment
        const article = document.createElement('article');
        article.classList.add('message');

        // let time = new Date(msg.updated);
        // let timePassed = new Date(Date.now() - time);
        // console.log(timePassed.getMinutes());

        article.innerHTML = `
            <section class="message__user">
                <img src="${DOMAIN+msg.author.photoUrl}" alt="user photo" class="message__user-photo">
                <div class="message__info">
                    <p class="message__user-name">${msg.author.name}</p>
                    <p class="message__time-stamp">${msg.updated}</p>
                </div>
            </section>
            <section class="message__content">
                <p class="message__text">${msg.content}</p>
            </section>
        `;
        fragment.appendChild(article);
    });

    messageList.appendChild(fragment);
}

function getParent(el) {
    let parent = null;
    if(el.classList.contains('message')) {
        return el;
    } else {
        if(el.parentElement !== null) {
            parent = getParent(el.parentElement);
        }
    }

    return parent;
}

fetchMessages();