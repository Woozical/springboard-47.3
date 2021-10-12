/** Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, 
 *  which returns the number of zeroes in the array.
 */
function countZeroes(arr, start=0, end=arr.length-1){
    // If we're at rightmost index, there is either 1 or no zeros in the array.
    if (start === arr.length-1){
        return arr[start] === 0 ? 1 : 0;
    }
    const mid = start + Math.floor((end - start) * 0.5);
    if (arr[mid] === 1){
        // Shift right
        return countZeroes(arr, mid+1, end);
    } else if (arr[mid] === 0){
        // If midpoint is 0, check the index to the left of the midpoint
        switch (arr[mid-1]){
            case 1:
                return arr.length - mid;
            case 0:
                // shift left
                return countZeroes(arr, start, mid);
            case undefined:
                // reached beginning of array, array is all zeroes
                return arr.length;
        }
    }
}

module.exports = countZeroes