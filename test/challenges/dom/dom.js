const A = document.querySelector('.A');
const B = document.querySelector('.B');

function domEqual(el1, el2) {

    const arr1 = [];
    const arr2 = [];
    const map1 = {};
    const map2 = {};

    function bfs(el, arr) {
        let queue = [...el.children];

        while(queue.length) {
            const check = queue.shift();
            arr.push(check.tagName);
            if(check.children) {
                for(let child of check.children) {
                    queue.push(child);
                }
            }
        }

        return arr;
    }
    bfs(el1, arr1);
    bfs(el2, arr2);

    if(arr1.length !== arr2.length) {
        return false;
    } else {
        // create maps
        for(let i=0; i<arr1.length; i++) {
            map1[arr1[i]] = ++map1[arr1[i]] || 1;
            map2[arr2[i]] = ++map2[arr2[i]] || 1;
        }

        // compare maps
        for(let key in map1) {
            if(map1[key] !== map2[key]) return false;
        }
    }

    return true;
}

console.log(domEqual(A, B));