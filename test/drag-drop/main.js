const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// EVENTS
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empty divs and call drag events
empties.forEach(empty => {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
});


// FUNCTIONS

function dragStart() {
    // when user is dragging the fill image
    this.classList.add('hold');

    // delay hiding the fill image
    setTimeout(() => {this.className = ''}, 10);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {

    // stop the default behavior hiding drop
    e.preventDefault();
}

function dragEnter(e) {
    this.classList.add('hover');

    e.preventDefault();
}

function dragLeave() {
    this.classList.remove('hover');
}

function dragDrop() {
    this.className = 'empty';
    // move the fill el into the div
    this.append(fill);
}
