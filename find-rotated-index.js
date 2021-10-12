function findRotatedIndex(arr, find, start=0, end=arr.length-1) {
    if (start === end) return arr[start] === find ? start : -1;
    // "split" array
    const mid = Math.floor((end + start) * 0.5);
    if (arr[mid] === find) return mid;
    // recursive search, value at last index of array will always be <  value at first index,
    // therefore, we compare value at arr[end] to find param to see where we are, and which direction to move
    if (arr[end] > find){
        // move right
        return findRotatedIndex(arr, find, mid+1, end);
    } else {
        // move left
        return findRotatedIndex(arr, find, start, mid);
    }
}
module.exports = findRotatedIndex