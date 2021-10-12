function findRotationCount(arr) {
    // on a rotated array, arr[0] will always be > arr[arr.length-1]
    if (arr[0] < arr[arr.length-1]) return 0;
    let start = 0;
    let end = arr.length-1;

    while(true){
        const mid = Math.floor((start + end) * 0.5);
        /** when arr[n-1] is > arr[n]
        arr[n] will be the lowest value in the array
        therefore, the 'natural' index of arr[n] would be 0
        so, n, is the number of rotations */

        // check either side of mid
        if (arr[mid-1] > arr[mid]) return mid;
        if (arr[mid] > arr[mid+1]) return mid+1;

        // if the value of arr[mid] is > arr[end], our lowest number is to the right of mid
        if (arr[mid] > arr[end]){
            start = mid;
        } else {
            end = mid;
        }
    }

}

module.exports = findRotationCount