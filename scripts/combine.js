function combineLists(l1, l2) {
    // find the longest list
    let max = Math.max(l1.length, l2.length);
    let combined = [];

    for(i=0; i < max; i++) {
        if(l1[i]) combined.push(l1[i]);
        if(l2[i]) combined.push(l2[i]);
    }

    return combined;
}

const list1 = ['a','b','c','d','e'];
const list2 = [5,7,89,100, 4, -100, 20];
const list3 = [];

console.log(combineLists(list1, list2));
console.log(combineLists(list1, list3));