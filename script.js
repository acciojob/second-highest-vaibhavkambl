//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }
    
    let first_max = -Infinity;
    let second_max = -Infinity;
    
    for (let num of arr) {
        if (num > first_max) {
            second_max = first_max;
            first_max = num;
        } else if (num < first_max && num > second_max) {
            second_max = num;
        }
    }
    
    if (second_max === -Infinity) {
        return -Infinity;
    }
    
    return second_max;
}