// In-place sort of an array, worst case O(N^2), best case O(N)

function insertionSort(arr) {
    // start with the second el since the first is 'sorted'
    for(let i=1; i < arr.length; i++) {
        let val = arr[i];
        // loop backwards the 'sorted' portion to find the spot
        // keep looping if arr[j] > the val being sorted
        for(let j=i-1; j >= 0 && arr[j] > val; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = val;
    }

    return arr;
}

insertionSort([2,1,9,76,4]);