// Create a Spreadsheet service that can get a value for a given column and set a value for a given column
// EX: get(column) return value
// EX: set(column, value)
// 'A1': 10, 'A2': 20, 'A3': '=A1+A2'

function Spreadsheet() {

    // local variable for tracking column values
    const sheet = {};
    // cache computed values
    const memo = {};
    // track dependencies for cells with formulas
    const deps = {};

    this.getColumnValue = function(col) {
        // check if it's already been computed
        if(memo[col]) {
            console.log('cached value');
            return memo[col];
        }

        const value = recursiveGet(col);
        // cache the fetched value
        memo[col] = value;

        return value;
    }

    this.setColumnValue = function(col, val) {
        // remove the cached value if you're updating a col
        if(memo[col]) {
            console.log('removing cached value');
            delete memo[col];
        }

        // check if the value is a formula 
        if(val.startsWith('=')) {
            // update cell dependencies
            let cells = val.substring(1).split('+');
            cells.forEach(cell => {
                if(!deps[cell]) {
                    deps[cell] = [col];
                } else {
                    deps[cell].push(col);
                }
            });
            console.log('current dependencies', deps)
        }

        // update the col val
        sheet[col] = val;

        // if other cells depend on this col, wipe memo, and get/update
        if(deps[col]) {
            deps[col].forEach(cell => {
                // wipe memo
                delete memo[cell];
                // get/update
                this.getColumnValue[cell];
            });
        }

        return sheet[col];
    }

    function recursiveGet(col) {
        let value = 0;

        if(sheet[col]) {
            // check if it's a formula
            if(sheet[col].startsWith('=')) {
                let cells = sheet[col].substring(1).split('+');
                cells.forEach(cell => {
                    value += recursiveGet(cell);
                });
            } else {
                value = parseInt(sheet[col]);
            }
        }
        return value;
    }
}

const sp = new Spreadsheet();
sp.setColumnValue('C1', '20');
sp.setColumnValue('C2', '15');
sp.setColumnValue('C3', '=A4+C1');
sp.setColumnValue('A4', '10');
sp.setColumnValue('B1', '45');

console.log(
    sp.getColumnValue('A4'),
    sp.getColumnValue('C3'),
    sp.getColumnValue('C3'),
    sp.setColumnValue('A4', '20'),
    sp.getColumnValue('C3'),
    sp.setColumnValue('C1', '100'),
    sp.getColumnValue('C3'),
    sp.getColumnValue('C3'),
);
