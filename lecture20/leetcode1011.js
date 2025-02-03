/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    
    let left =0; right =0;
    // create an array of suitable weight and binary search on it
    for(let w of weights){
        left = Math.max(left, w);
        right += w;
    }
    // handle binary search
    while (left < right){
        let mid = Math.floor((left+right)/2); 
        let curWeight = 0;
        let time = 1
        // handle which weight is suitable
        for(let w of weights){
            if(curWeight + w > mid){
                time +=1;
                curWeight =0;
            }
            curWeight += w
        }
        // use 'time' for checking condition
        // if time > days => need more weight --> decrease time
        if(time > days) left = mid +1;
        else right = mid;
    }
    return left;
};

