// UI Variables
const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('input#task-field');
const taskList = document.querySelector('ul.mdc-list');
const clearBtn = document.querySelector('#clear-btn');
const filter = document.querySelector('input#filter-field');

// console.log(deleteBtns);

// App variables
let currentTasks;

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
    // DOM LOAD event
    document.addEventListener('DOMContentLoaded', displayTasks);
    // Add tasks
    taskForm.addEventListener('submit', addTask);
    // Delete tasks
    // EVENT DELEGATION for DYNAMIC CONTENT
    taskList.addEventListener('click', deleteTask);
    // Clear tasks
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks
    filter.addEventListener('input', filterTasks);
}

function addTask(e) {
    // check for blank values
    if(taskInput.value === '') alert('Add a task.');
    // create the li el
    const li = document.createElement('li');
    li.className = 'mdc-list-item';
    // add the textNode
    li.appendChild(document.createTextNode(taskInput.value));
    // create the icon
    const icon = document.createElement('span');
    icon.className = 'mdc-list-item__meta material-icons delete-task';
    // make it the clear icon
    icon.appendChild(document.createTextNode('clear'));
    li.appendChild(icon);

    // add to the task-list
    taskList.appendChild(li);

    // store in LS
    storeTaskInStorage(taskInput.value);

    this.reset();

    e.preventDefault();
}

function deleteTask(e) {
    // console.log(e.target);
    // specify the target
    if(e.target.className.includes('delete-task')) {
        removeFromStorage(e.target.parentElement.firstChild.textContent);
        e.target.parentElement.remove();
    }
}

function clearTasks() {
    // innterHtml = ''

    // removeChild() is actually faster
    while(taskList.firstChild) {
        // keep removing the firstChild
        taskList.removeChild(taskList.firstChild);
    }

    localStorage.clear();
}

function filterTasks() {
    // grab list items and change display
    document.querySelectorAll('.mdc-list-item').forEach(item => {
        if(item.firstChild.textContent.includes(filter.value)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function storeTaskInStorage(task) {
    // let tasks;
    // if(localStorage.getItem('tasks') === null) {
    //     tasks = [];
    // } else {
    //     tasks = JSON.parse(localStorage.getItem('tasks'));
    // }
    currentTasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(currentTasks));
}

function displayTasks() {
    currentTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // display any LS tasks
    currentTasks.forEach(task => {
        // create the li el
        const li = document.createElement('li');
        li.className = 'mdc-list-item';
        // add the textNode
        li.appendChild(document.createTextNode(task));
        // create the icon
        const icon = document.createElement('span');
        icon.className = 'mdc-list-item__meta material-icons delete-task';
        // make it the clear icon
        icon.appendChild(document.createTextNode('clear'));
        li.appendChild(icon);
        // add to the task-list
        taskList.appendChild(li);
    });
}

function removeFromStorage(task) {
    let newList = currentTasks.filter(text => text !== task);
    localStorage.setItem('tasks', JSON.stringify(newList));
}