/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    //  array for each digit in num
    let digits = [];
    //iterate
    while(num > 0) {
        digits.push(num%10); // split each one by mod 10
        num = Math.floor(num/10); // update new num for next round
    }
    //console.log(digits)
    digits.sort((a,b) => a-b) // sort ASC - Time complexity: O(nlog(n))
    // combine the most min - with the most max
    let num1 = digits[0]*10 +digits[3];
    // remaining case
    let num2 = digits[1]*10 +digits[2];

    // return sum of 2 num we have already combine
    return num1+num2;
};

//  RECURSIVE *************

/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    
    /*
    Input:
        + num: initially  number
        + digits: array for saving each digit of number
    Process:
        + Recursive with sum += nums[i] & increase 'i' by 2 
    Output:
        + minSum = num1+num2
    */
    const findDigits = (num, digits) => {
        if (num <= 0 ) return digits
        digits.push(num%10);
        return findDigits(Math.floor(num/10), digits)
    }
    let digits =  findDigits(num, []);
    // sort array digit for greedy
    digits.sort((a,b) => a-b) // sort ASC - Time complexity: O(nlog(n))
    // top1 min
    let num1 = digits[0]*10 +digits[3];
    // top2 min
    let num2 = digits[1]*10 +digits[2];
    return num1+num2;

};
