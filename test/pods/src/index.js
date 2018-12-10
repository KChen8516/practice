import _ from 'lodash';

import * as groups from './groups';

// variables
const people = JSON.parse(localStorage.getItem('people')) || [];

const lunchForm = document.querySelector('.add-names');
const nameInput = lunchForm.querySelector('input[name="namesField"]');
const nameList = document.querySelector('ul.name-list');
const createGroupButton = document.querySelector('.random-btn');
const groupLists = document.querySelector('.group-section--lists');

console.log(createGroupButton);
createGroupButton.style.borderStyle = 'solid';
createGroupButton.style.borderWidth = '1px';
createGroupButton.style.borderColor = 'black';


// Add the people that want to go out to lunch
function addPeople(e) {
    e.preventDefault();
    console.log(nameInput.value);
    // store each name and update localStorage
    people.push(nameInput.value);
    localStorage.setItem('people', JSON.stringify(people));
    // reset the form
    this.reset();

    populateNameList(people, nameList);
}

// Show the lunch attendee list
function populateNameList(people, nameList) {
    console.log(people, nameList);

    const html = people.map(person => {
        return `<li>${person}</li>`;
    }).join('');

    console.log(html);

    nameList.innerHTML = html;
}

// Determine the lunch groups
function randomizePeople(people) {
    // return groups of 3, 4 , 5
    const randomGroups = groups.createLunchGroups(people);

    displayGroups(randomGroups, groupLists);
}

// Populate and display the lunch groups
function displayGroups(groups, groupsList) {
    console.log(groups, groupsList);
    
    // remove all child elements
    if(groupsList.querySelectorAll('ul').length !== 0) {
        // console.log(groupLists.querySelectorAll('ul'));
        groupLists.querySelectorAll('ul').forEach(list => list.remove());
    }

    // generate new list elements
    for(let i = 0; i < groups.length; i++) {
        // create the ul el
        const ul = document.createElement('ul');
        ul.className = `group-list-${i}`;
        groups[i].map(person => {
            let line = document.createElement('li');
            line.appendChild(document.createTextNode(`${person}`));
            ul.appendChild(line);
        });
        console.log(ul);
        // let group = ul.innerHTML = html;
        // console.log(group);
        groupsList.appendChild(ul);
    }
}

lunchForm.addEventListener('submit', addPeople);
createGroupButton.addEventListener('click', () => randomizePeople(people));