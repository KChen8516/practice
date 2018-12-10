// import * as groups from './groups';
// var groups = require('groups');

// the section to update
const apartmentListPeople = ['abcdefg','aldkfjadasfd','1455134513', 'b','c', 'ee' ,'fff', 'ggg', 'zzz', '1', '1', '1', '1', '1', '1', '1', '1'];

const groupSection = document.querySelector('.lunch-groups');

const randomButton = document.querySelector('.random-btn');

const people = apartmentListPeople;

console.log(randomButton);

function randomizeGroups() {
    let newGroup = createLunchGroups(people);
    // console.log(newGroup);
    displayWait(newGroup);
}

// function to populate random groups
function populateList(group) {
    // loop through the groups and build html lists
    for(i=0; i<group.length; i++) {
        // create a UL
        const ul = document.createElement('ul');

        // let groupHtml = new HTMLCollection();

        groupHtml = group[i].map(person => {
            const li = document.createElement('li');
            li.innerText = person;
            ul.appendChild(li);
            console.log(li);
            // return `<li>${person}</li>`
        });

        console.log(ul);

        // combine the ul and lis
        // const combined = ul.appendChild(groupHtml);
        // const combined = groupHtml.forEeach(li => ul.appendChild(li));

        // console.log(combined);

        // append to groupSection
        groupSection.appendChild(ul);
    }
}

function displayWait(group) {
    const loader = document.querySelector('.loader');

    let loaderText = 'Waiting';
    let index = 0;

    const loadingTime = 5000;

    // console.log(loaderText + '.');

    setInterval(() => {
        console.log(index);
        if(index > 3) {
            loaderText = 'Waiting';
            index = 0;
        }
        for(i=0; i< index; i++) {
            loaderText += '.';
        }
        // console.log(loaderText);

        loader.innerText = loaderText;
        index++;
    }, loadingTime/10);

    setTimeout(() => {
        loader.style.display = 'none';
        populateList(group);
    }, loadingTime);
}


// add an event listener for randomizing
randomButton.addEventListener('click', randomizeGroups);






const createLunchGroups = people => {
    // variables
    const lunchGroups = [];

    // randomize the list, shuffle names in people
    // let randomPeople = shuffle(people);
    let randomPeople = people;

        // make sure that our final subgroups add up to multiples of 3-5
        if(people.length % 3 === 0) {
            // slice?
            for(let i=0; i<people.length; i = i+3) {
                lunchGroups.push([randomPeople[i], randomPeople[i+1], randomPeople[i+2]]);
            }
        } else if (people.length % 4 === 0) {
            for(let i=0; i<people.length; i = i+4) {
                lunchGroups.push([randomPeople[i], randomPeople[i+1], randomPeople[i+2], randomPeople[i+3]]);
            }
        } else if (people.length % 5 === 0) {
            for(let i=0; i<people.length; i = i+5) {
                lunchGroups.push([randomPeople[i], randomPeople[i+1], randomPeople[i+2], randomPeople[i+3], randomPeople[i+4]]);
            }
        } else {
            // handle cases where the length doesnt divide evenly
            // create groups of 3 until you encounter a remainder
            // favoring creating groups of 3
            let remainder = people.length % 3;
            // subtract the remainder from people.length
            let numOfGroups = ((people.length - remainder)/3) - 1;

            for(let i=0; i<numOfGroups; i++) {
                // loop and grab 3 items from randomPeople
                lunchGroups.push([randomPeople[3*i], randomPeople[3*i+1], randomPeople[3*i+2]]);
            }

            if(remainder === 1) {
                // grab the last 4
                lunchGroups.push([
                    randomPeople[randomPeople.length-1],
                    randomPeople[randomPeople.length-2],
                    randomPeople[randomPeople.length-3],
                    randomPeople[randomPeople.length-4] 
                ]);
            } else if (remainder === 2) {
                // grab the last 5
                lunchGroups.push([
                    randomPeople[randomPeople.length-1],
                    randomPeople[randomPeople.length-2],
                    randomPeople[randomPeople.length-3],
                    randomPeople[randomPeople.length-4],
                    randomPeople[randomPeople.length-5]
                ]);    
            }
        }

        return lunchGroups;
    // return lunchGroups
}

