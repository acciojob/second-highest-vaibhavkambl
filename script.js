//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }
    
    let firstMax = -Infinity;
    let secondMax = -Infinity;
    
    for (let num of arr) {
        if (num > firstMax) {
            secondMax = firstMax;
            firstMax = num;
        } else if (num < firstMax && num > secondMax) {
            secondMax = num;
        }
    }
    
    if (secondMax === -Infinity) {
        return -Infinity;
    }
    
    return secondMax;
}