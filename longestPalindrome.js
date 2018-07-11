var practice = function(str) {
    let arr = str.split('');
    let longest = '';
    for (let j = arr.length; j >= 0; j --) {
       for (let i = 0; i <= arr.length; i ++) {
           if ( str.substr(i, j) === str.substr(i,j).split('').reverse().join('') &&  str.substr(i,j).length > longest.length) {
               longest = str.substr(i,j)
           }
       }
    }
    return longest;
};

practice('dracecareflbcb')
