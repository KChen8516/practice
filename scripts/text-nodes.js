
const elements = [];
function text(newText) {
    if(arguments.length) {
        // setter
        // loop and...
            // set innerHtml to ''
        for(let i=0; i<elelments.length; i++) {
            elements[i].innerHTML = '';
            // if the same node is appended somewhere else, it'll implicitly remove it from its prev position
            const text = document.createTextNode(newText);
            elements[i].appendChild(text);
        }
    } else {
        // getter
        return this[0] && getText(this[0]);
    }
}

const getText = function(el) {
    let text = '';

    for(let child of el.childNodes) {
        if(child.nodeType === 3) {
            // is a textNode
            text += child.nodeValue;
        } else if(child.nodeType === 1) {
            text += getText(child);
        }
    }

    return text;
}

function find(selector) {
    const elements = [];

    for(let el of elements) {
        const nestedEls = el.querySelectorAll(selector);
        [].push.apply(elements, nestedEls);
    }

    return elements;
}