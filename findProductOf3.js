function findProductOf3(arr) {
    let highest = Math.max(arr[0], arr[1]);
    let lowest = Math.min(arr[0], arr[1]);
    let lowestProdOf2 = arr[0] * arr[1];
    let highestProdOf2 = arr[0] * arr[1];
    let highestProdOf3 = arr[0] * arr[1] * arr[2];

    if (arr.length < 3) {
        throw new Error('arr length must be at least 3');
    }

    for (let i = 2; i < arr.length ; i ++) {
        let current  = arr[i];
        highestProdOf3 = Math.max(
            highestProdOf3,
            current * highestProdOf2,
            current * lowestProdOf2
        )

        lowestProdOf2 = Math.min(
            lowestProdOf2, 
            current * highest, 
            current * lowest
        )

        highestProdOf2 = Math.max(
            highestProdOf2,
            current * highest,
            current * lowest
        )

        highest = Math.max(highest, current);
        lowest = Math.min(lowest, current);
        
    }

    return highestProdOf3;
}