// Grab els
const nameForm = document.querySelector('.names-form');

const nameList = document.querySelector('.names-list');

const names = [];

function addNames (e) {
    e.preventDefault();
    const person = this.querySelector('[name=person]');
    // store the submitted name
    names.push(person.value);
    console.log(names);
    // reset the form
    this.reset();
}

nameForm.addEventListener('submit', addNames);