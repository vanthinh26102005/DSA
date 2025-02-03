/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let numStr = num.toString();
    let res =''
    for(let i=0; i<numStr.length; i++){
        if(numStr[i] === '6') {
            res = numStr.substring(0,i) +'9'+ numStr.substring(i+1)
            return parseInt(res);
        }
    }
    return num;
};


//  RECURSIVE ************

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {

    //convert int into string
    let numStr = num.toString();
    
     /*
    Input:
        + numStr: initially string
        + i: index for traversing string
        + res: for updating current string output
    Process:
        + Recursive with sum += nums[i] & increase 'i' by 2 
    Output:
        + maxNum after parese from string
    */
    const findMax = (numStr, i, res) =>{
        if( i >= numStr.length) return parseInt(res);
        if (numStr[i] === '6'){
            res = numStr.substring(0,i) +'9'+ numStr.substring(i+1)
            return parseInt(res)
        }
        // update res+numStr[i] because case: 9999 nothing change 
        // so if not update => output is 'null'
        return findMax(numStr, i+1, res + numStr[i])
    }

    return findMax(numStr, 0, '')
};







