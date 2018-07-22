var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];

// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

// O(nlgn)
// var merge = function(arr1, arr2) {
//   console.log(arr1.concat(arr2).sort((a,b) => a-b))
//   return arr1.concat(arr2).sort((a,b) => a-b);
// }

// O(n) time 0(n) space, cannot do this 'in place'
var merge = function(arr1, arr2) {
    let newArr = [];

    while(arr1.length || arr2.length) {
        if (arr1[0] >= arr2[0] || !arr1[0]) {
            newArr.push(arr2[0])
            arr2.shift();
        } else {
            newArr.push(arr1[0]);
            arr1.shift();
        }
    }
    console.log(newArr);
    return newArr;
}

merge(myArray, alicesArray);
