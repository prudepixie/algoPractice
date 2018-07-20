var firstUniqChar = function(s) {
    let map = {};
    let arr = s.split('');
    for (let i = 0; i < arr.length; i ++ ) {
        if (map[arr[i]]) {
            map[arr[i]] ++
        } else {
            map[arr[i]] =1
        }
    }
    for (const ele in map) {
        if (map[ele] === 1) {
            return arr.indexOf(ele)
        }
    }

    return -1;

};

firstUniqChar('loveleetcode');
