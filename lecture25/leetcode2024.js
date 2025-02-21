/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
    
    let left = 0; // start pointer of window 
    let res = 0; // variable for saving max subString length
    let count = 0; // count flipped time T->F or F->T

    // count subString contains 'T' and contains k 'F'
    for (let i = 0; i < answerKey.length; i++) {
        if (answerKey[i] === 'F') count++;
        while (count > k) {
            // if no more times to flipped F->T => sliding
            if (answerKey[left] === 'F') count--;
            left++;
        }
        // our window size i current pointer - left pointer
        res = Math.max(res, i - left + 1);
    }

    // count subString contains 'F' and contains k 'T'
    left = 0; count = 0;
    for (let i = 0; i < answerKey.length; i++) {
        if(answerKey[i] === 'T') count++;
        while(count > k) {
            // if no more times to flipped T->F => sliding
            if(answerKey[left] ==='T') count--;
            left++;
        }
        res = Math.max(res, i - left + 1);
    }
    return res;
};