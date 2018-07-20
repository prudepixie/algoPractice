// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

var divideInChunks = function(arr, size) {
  let newArr = [];
  if (size === 0) return arr;
  let end = size;
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, end));
    end += size;
  }
  return newArr;
}

divideInChunks([1, 2, 3, 4], 2)
