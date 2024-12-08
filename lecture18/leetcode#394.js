/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let currentString = '';
    let k = 0; // repeat times

    for (let char of s) {
        if (!isNaN(char)) {
            // read the repeat time from string
            k = k * 10 + parseInt(char);
        } else if (char === '[') {
            // push the current string and repeat time to the stack
            stack.push([currentString, k]);
            // reset for the new substring
            currentString = '';
            k = 0;
        } else if (char === ']') {
            // pop from the stack and decode
            let [prevString, repeatTimes] = stack.pop();
            currentString = prevString + currentString.repeat(repeatTimes);
        } else {
            // add character to the current string
            currentString += char;
        }
    }

    return currentString;
};
