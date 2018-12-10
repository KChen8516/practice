// 1. groups should be at least 3 people and at most 5 people
// 2. Every function call should produce different groupings
// 3. ['','','','',''];

// var shuffle = require('lodash.shuffle');
import { shuffle } from 'lodash';

export const apartmentListPeople = [
  'abcdefg',
  'aldkfjadasfd',
  '1455134513',
  'b',
  'c',
  'ee',
  'fff',
  'ggg',
  'zzz',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1'
];

export const createLunchGroups = people => {
  // variables
  const lunchGroups = [];

  // randomize the list, shuffle names in people
  let randomPeople = shuffle(people);

  // make sure that our final subgroups add up to multiples of 3-5
  if (people.length % 3 === 0) {
    // slice?
    for (let i = 0; i < people.length; i = i + 3) {
      lunchGroups.push([randomPeople[i], randomPeople[i + 1], randomPeople[i + 2]]);
    }
  } else if (people.length % 4 === 0) {
    for (let i = 0; i < people.length; i = i + 4) {
      lunchGroups.push([
        randomPeople[i],
        randomPeople[i + 1],
        randomPeople[i + 2],
        randomPeople[i + 3]
      ]);
    }
  } else if (people.length % 5 === 0) {
    for (let i = 0; i < people.length; i = i + 5) {
      lunchGroups.push([
        randomPeople[i],
        randomPeople[i + 1],
        randomPeople[i + 2],
        randomPeople[i + 3],
        randomPeople[i + 4]
      ]);
    }
  } else {
    // handle cases where the length doesnt divide evenly
    // create groups of 3 until you encounter a remainder
    // favoring creating groups of 3
    let remainder = people.length % 3;
    // subtract the remainder from people.length
    let numOfGroups = (people.length - remainder) / 3 - 1;

    for (let i = 0; i < numOfGroups; i++) {
      // loop and grab 3 items from randomPeople
      lunchGroups.push([
        randomPeople[3 * i],
        randomPeople[3 * i + 1],
        randomPeople[3 * i + 2]
      ]);
    }

    if (remainder === 1) {
      // grab the last 4
      lunchGroups.push([
        randomPeople[randomPeople.length - 1],
        randomPeople[randomPeople.length - 2],
        randomPeople[randomPeople.length - 3],
        randomPeople[randomPeople.length - 4]
      ]);
    } else if (remainder === 2) {
      // grab the last 5
      lunchGroups.push([
        randomPeople[randomPeople.length - 1],
        randomPeople[randomPeople.length - 2],
        randomPeople[randomPeople.length - 3],
        randomPeople[randomPeople.length - 4],
        randomPeople[randomPeople.length - 5]
      ]);
    }
  }

  return lunchGroups;
};
