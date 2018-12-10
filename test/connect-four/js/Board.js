// class Board {
//     constructor() {
//         this.rows = 6;
//         this.columns = 7;
//         this.spaces = this.createSpaces();
//     }

//     /** 
//      * Generates 2D array of spaces. 
//      * @return  {Array}     An array of space objects
//      */
//     createSpaces() {
//         const spaces = [];
//         // loop through Board rows & columns in O(M*N) TC
//         for(let i=0; i<this.rows; i++) {
//             const row = []
//             for(let k=0; k<this.columns; k++) {
//                 row.push(new Space(i,k));
//             }
//             spaces.push(row);
//         }
//         return spaces;
//     }
// }

function Board() {
    const columns = 7;
    const rows = 6;
    this.spaces = createSpaces();

    function createSpaces() {
        const spaces = [];
        // loop through Board rows & columns in O(M*N) TC
        for(let i=0; i<columns; i++) {
            const row = []
            for(let k=0; k<rows; k++) {
                row.push(new Space(i,k));
            }
            spaces.push(row);
        }
        return spaces;
    }

    this.drawHTMLBoard = function() {
        for(let col of this.spaces) {
            for(let space of col) {
                space.drawSVGSpace();
            }
        }
    }
}