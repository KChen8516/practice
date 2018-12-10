// WINDOW METHODS / OBJECTS / PROPERTIES

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure?')) {
//     console.log('YES');
// } else {
//     console.log('NO');
// }

let val;

// Whole window measurements
val = window.outerHeight;
val = window.outerWidth

// The viewable content in window
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
yScroll = window.scrollY;
console.log('scrollY value', yScroll);
val = window.scrollX;

console.log(val);

// Location object
const winLocation = window.location;
const locationObj = {
    hostName: window.location.hostname,
    port: window.location.port,
    href: window.location.href,
    search: window.location.search
}
console.log(winLocation);
console.table(locationObj);

// Redirect
// window.location.href = 'http://github.com';

// History object

// traverse your browser history
// window.history.go(-1);
// window.history.length

// Navigator object (pertains specifically to the browser)

const nav = window.navigator;
const navObj = {
    appName: window.navigator.appName,
    appVersion: window.navigator.appVersion,
    userAgent: window.navigator.userAgent,
    platform: window.navigator.platform,
    vendor: window.navigator.vendor,
    language: window.navigator.language
}

console.log(nav);
console.table(navObj);