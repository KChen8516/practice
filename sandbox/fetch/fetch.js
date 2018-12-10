const body = document.querySelector('body');
const heading = document.createElement('h2');
const list = document.createElement('ul');

list.className = 'user-list';
heading.textContent = 'Users:';
body.appendChild(heading);
body.appendChild(list);

let payload = [];

fetchUsers();

function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())      // request
        .then(json => {
            payload = json;
            populatePage(payload);
        });
}

// create a ul to denote each user by name,
// create a ul for each name to display their attributes
function populatePage(payload) {
    console.log(payload);
    payload.forEach(user => {
        let html = '';
        let li = document.createElement('li');
        html += `<li>${user.name}</li>`;
        li.innerHTML = html;
        list.appendChild(li);
    });
}

