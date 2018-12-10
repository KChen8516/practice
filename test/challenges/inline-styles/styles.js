const styles = document.createElement('style');
let stylesMap = {};

function updateStyles(css, id) {
    const text = document.createTextNode(`.class${id}`+`{${css}}`);
    styles.appendChild(text);
}

function eliminateInlineStyle() {
    let counter = 1;
    //BFS traverse to find all elements
    function BFS() {
        // start with all child els of body
        let queue = [...document.body.children];
        while(queue.length) {
            const el = queue.shift();

            if(el.children) {
                queue.push(...el.children);
            }

            if(el.getAttribute('style') !== null) {
                let css = el.getAttribute('style');
                if(css.charAt(css.length-1) !== ';') css += ';';
                // check for existing style
                if(stylesMap[css]) {
                    el.classList.add(stylesMap[css]);
                } else {
                    updateStyles(css, counter);
                    el.classList.add(`class${counter}`);
                    stylesMap[css] = `class${counter}`;
                    counter++;
                }
                el.style = '';
            }
        }
    }

    BFS();
    document.head.appendChild(styles);
    // console.log(stylesMap);
}

document.addEventListener('DOMContentLoaded', eliminateInlineStyle);