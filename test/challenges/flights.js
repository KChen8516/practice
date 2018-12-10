const flights = [
    {origin: 'LAX', destination: 'SFO'},
    {origin: 'DEN', destination: 'SDG'},
    {origin: 'PDX', destination: 'JFK'},
    {origin: 'SFO', destination: 'PDX'},
    {origin: 'JFK', destination: 'DEN'}
];

function findOrigin(arr) {
    // the origin of the flight path should not be a destination
   const destSet = new Set();

   for(let flight of arr) {
       destSet.add(flight.destination);
   }

   for(let flight of arr) {
       if(!destSet.has(flight.origin)) return flight;
   }

   return -1;
}

// console.log(findOrigin(flights));

function flightPath(arr) {
    const flightMap = {};
    const path = [];

    for(let i=0; i<arr.length; i++) {
        flightMap[arr[i].origin] = i;
    }

    path.push(findOrigin(flights));

    while(path.length < arr.length) {
        // console.log(path);
        const origToFind = path[path.length-1].destination;
        const arrIndex = flightMap[origToFind];
        // console.log(orig, index);
        path.push(arr[arrIndex]);
    }

    // console.log(flightMap);
    // console.log(path);
    return path;
}

console.log(flightPath(flights));