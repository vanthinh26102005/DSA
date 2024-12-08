/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const end = s.length

    for(let i=0; i<end/2; i++){
        let temp = s[i];
        s[i] = s[end - i -1];
        s[end - i - 1] = temp;
    }
    return s;
};