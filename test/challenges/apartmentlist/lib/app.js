'use strict';

// 1. groups should be at least 3 people and at most 5 people
// 2. Every function call should produce different groupings
// 3. ['','','','',''];

var shuffle = require('lodash.shuffle');

var apartmentListPeople = ['abcdefg', 'aldkfjadasfd', '1455134513', 'b', 'c', 'ee', 'fff', 'ggg', 'zzz', '1', '1', '1', '1', '1', '1', '1', '1'];

var createLunchGroups = function createLunchGroups(people) {
    // variables
    var lunchGroups = [];

    // randomize the list, shuffle names in people
    var randomPeople = shuffle(people);

    // make sure that our final subgroups add up to multiples of 3-5
    if (people.length % 3 === 0) {
        // slice?
        for (var i = 0; i < people.length; i = i + 3) {
            lunchGroups.push([randomPeople[i], randomPeople[i + 1], randomPeople[i + 2]]);
        }
    } else if (people.length % 4 === 0) {
        for (var _i = 0; _i < people.length; _i = _i + 4) {
            lunchGroups.push([randomPeople[_i], randomPeople[_i + 1], randomPeople[_i + 2], randomPeople[_i + 3]]);
        }
    } else if (people.length % 5 === 0) {
        for (var _i2 = 0; _i2 < people.length; _i2 = _i2 + 5) {
            lunchGroups.push([randomPeople[_i2], randomPeople[_i2 + 1], randomPeople[_i2 + 2], randomPeople[_i2 + 3], randomPeople[_i2 + 4]]);
        }
    } else {
        // handle cases where the length doesnt divide evenly
        // create groups of 3 until you encounter a remainder
        // favoring creating groups of 3
        var remainder = people.length % 3;
        // subtract the remainder from people.length
        var numOfGroups = (people.length - remainder) / 3 - 1;

        for (var _i3 = 0; _i3 < numOfGroups; _i3++) {
            // loop and grab 3 items from randomPeople
            lunchGroups.push([randomPeople[3 * _i3], randomPeople[3 * _i3 + 1], randomPeople[3 * _i3 + 2]]);
        }

        if (remainder === 1) {
            // grab the last 4
            lunchGroups.push([randomPeople[randomPeople.length - 1], randomPeople[randomPeople.length - 2], randomPeople[randomPeople.length - 3], randomPeople[randomPeople.length - 4]]);
        } else if (remainder === 2) {
            // grab the last 5
            lunchGroups.push([randomPeople[randomPeople.length - 1], randomPeople[randomPeople.length - 2], randomPeople[randomPeople.length - 3], randomPeople[randomPeople.length - 4], randomPeople[randomPeople.length - 5]]);
        }
    }

    return lunchGroups;
    // return lunchGroups
};

console.log(createLunchGroups(apartmentListPeople));