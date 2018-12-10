// Imagine we have an image. We’ll represent this image as a simple 2D array where every pixel is a 1 or a 0. 

// The image you get is known to have multiple rectangles of 0s on a background of 1s. Write a function that takes in the image and outputs the coordinates of all the 0 rectangles -- top-left and bottom-right; or top-left, width and height.

// Sample output:
// [[[2,3],[3,5]],
//  [[3,1],[5,1]],
//  [[5,3],[6,4]]]

// For example:
var images = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1]
];

var image = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 1, 1],
    [1, 0, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 1, 1, 0],
    [1, 0, 1, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1]
];


// single 0 is a valid rectangle, also smallest
// biggest is entire 2D array
// can be one or more rectangles, no overlapping rectangles

// first 0 is always top-left
// traverse right until 1 or end of array[i]

// store the "col" where we find top-left
    // loop "vertically" through images[i] until 1 or end of images[i]

function findImage(arr) {
    // find top-left
    // let row = 0;
    // let col = 0;
    // let width = 0;
    // let height = 0;
    let rectangles = [];

    for(let i = 0; i < arr.length; i++) {
        for(let k = 0; k < arr[i].length; k++) {
            if(arr[i][k] === 0) {
                // update the col while saving the square
                k = checkTopLeft(i, k);
                // console.log({row: i, col: k});
            }
        }
    }

    // worst case O(N) TC
    function getTopLeft() {
        for(let i = 0; i < arr.length; i++) {
            for(let k = 0; k < arr[i].length; k++) {
                if(arr[i][k] === 0) {
                    row = i;
                    col = k;
                    return;
                }
            }
        }
    }

    // getTopLeft();

    function checkTopLeft(row, col) {
        // if(rectangles.length === 0) {
        //     // update rectangles with found image
        //     return col;
        // }
        // console.log('searching', {row: row, col: col});
        
        for(let i = 0; i < rectangles.length; i++) {
            // console.log('searching for rectangles');
            // find the matching rectangle
            let sameRow = row >= rectangles[i].row && row <= (rectangles[i].row + rectangles[i].height);
            let sameCol = col >= rectangles[i].col && col <= (rectangles[i].col + rectangles[i].width);
            if(sameCol && sameRow) {
                // return new col
                // console.log('found rectangle', rectangles[i]);
                return col + rectangles[i].width;
            }
        }
        
        // Did not find a previous rectangle
        let rectWidth = 0;
        let rectHeight = 0;

        for(let i = col; i < arr[row].length; i++) {
            if(arr[row][i] === 0) rectWidth++;
            if(arr[row][i] === 1) break;
        }

        for(let i = row; i < arr.length; i++) {
            if(arr[i][col] === 0) rectHeight++;
            if(arr[i][col] === 1) break;
        }

        rectangles.push({row: row, col: col, height: rectHeight, width: rectWidth });

        // return the new col starting point
        return col + rectWidth;
    }


    // find the length of the rectangle
    // for(let i = col; i < arr[row].length; i++) {
    //     if(arr[row][i] === 0) width++;
    // }

    // find the height of the rectangle
    // for(let i = row; i < arr.length; i++) {
    //     if(arr[i][col] === 0) height++;
    // }


    // return {row: row, col: col, height: height, width: width }
    return rectangles;
}

// console.log(findImage(image));
console.log(findImage(images));

// function findImages(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let k = 0; k < arr[i].length; k++) {
//             findImage(image, i, k)
//         }
//     }
// }

  