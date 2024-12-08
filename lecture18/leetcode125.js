/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    function isChar(c) {
        return /[a-z0-9]/.test(c);
    }
    const temp = s.toLowerCase();
    let res =''
    for(let i=0; i< temp.length; i++){
        if(isChar(temp[i])) res += temp[i];
    }
    let left = 0;
    let right = res.length-1;
    while(left < right){
        if(res[left] != res[right]) return false;
        left++;
        right--;
    }
    return true;
};
