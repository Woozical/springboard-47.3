function findFloor(arr, find, start=0, end=arr.length-1) {
    // If we're at rightmost index, the entire array is <= find
    if (start === arr.length-1){
        return arr[start];
    }
    // If we're at the leftmost index, and that doesn't meet floor requirements, everything is > find, return -1
    else if (end === 0){
        return arr[start] <= find ? arr[start] : -1;
    }
    const mid = start + Math.floor((end - start) * 0.5);

    if (arr[mid] > find){
        // Shift to the left, we're too high up
        return findFloor(arr, find, start, mid);
    } else if (arr[mid] <= find){
        // If midpoint is less than or equal to find, check the index to the right of the midpoint
        // If the next entry is > find, we found our floor
        if (arr[mid+1] > find) return arr[mid];
        // Otherwise, need to keep going right to see if there's a number potentially closer to find
        // Shift to the right
        return findFloor(arr, find, mid+1, end);
    }
}

module.exports = findFloor