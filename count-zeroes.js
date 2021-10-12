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

// Start in middle, compare middle idx and index to the left, if mid=0 and left=1, we can count from mid
// if mid=1 and left=1, we need to shift to the right
// if mid=0 and left=0, we need to shift to the left
//[1,1,1,1,0,0]
//[S,X,M,X,X,E] = Mid=1, Mid-1 = 1; shift right, mid+1 is now start
//[X,X,X,S,M,E] = Mid=0, Mid-1 = 1; we can now count, length-mid (6-4) = 2
//[1,1,0,0,0,0]
//[S,X,M,X,X,E]
//[0,0,0]
//[S,M,E] = Mid = 0, Left = 0
//[SM,E,X] = 

module.exports = countZeroes