
const root = (x, n) => {
    let left = 0;
    let right = Math.max(x, 1); // Note*: for case x<1
    let mid;

    while (right - left > 0.0001) { // check precision  in 0.0001
        mid = (left + right) / 2;
        if (Math.pow(mid, n) <= x) {  // mid is too small -> check right side
            left = mid;
        }
        else right = mid; // mid is too big -> check left side
    }

    return mid;
}

console.log('root', root(4, 2))

// sqrt - leetcode69

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {

    const root = (x, n) => {
        let left = 0;
        let right = Math.max(x, 1); // Note*: for case x<1
        let mid;

        while (right - left > 0.0001) { // check precision  in 0.0001
            mid = (left + right) / 2;
            if (Math.pow(mid, n) <= x) {  // mid is too small -> check right side
                left = mid;
            }
            else right = mid; // mid is too big -> check left side
        }

        return mid;
    }

};