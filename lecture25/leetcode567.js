/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    // base case
    if(s1.length > s2.length) return false;
    
    // init 2 array with size = 26 because there are 26 alphabets
    const countS1 = new Array(26).fill(0);
    const countS2 = new Array(26).fill(0);
    
    // this is root index for every alphabet
    const aCode = 'a'.charCodeAt(0);

    // count frequency of s1
    for(let i = 0; i < s1.length; i++) {
        countS1[s1[i].charCodeAt(0) - aCode]++;
        // beside that count frequency of the first wnd of s2 
        countS2[s2[i].charCodeAt(0) - aCode]++;
    }

    // use sliding window with size = s1.length to iterate through s2
    // check freq of s1 === freq of wnd on s2
    for(let i = s1.length; i<s2.length; i++){
        if (checkEqual(countS1, countS2)) return true;
        
        // sliding on S2 remove left & add right
        countS2[s2.charCodeAt(i-s1.length) -  aCode]-- // remove left
        countS2[s2.charCodeAt(i) - aCode]++ //add right
    }
    // return the last wnd
    return checkEqual(countS1, countS2)
    
};
// helper function to check frequency of each element in 2 array
function checkEqual(arr1,  arr2) {
    for(let i=0; i<26; i++){
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
}

console.log(checkInclusion('cba', 'bbbca'))