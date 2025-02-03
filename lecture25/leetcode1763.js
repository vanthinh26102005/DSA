/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
    let maxLength = 0;
    let res = "";

    // function to check is our substring now
    /*
        input:
            + wnd is window contains substring
        process:
            + check is nice
            + it appears both in uppercase and lowercase.
        output:
            + true/false
    */
    const isNice = (wnd) => {
        for (let char of wnd) {
            if (!wnd.has(char.toLowerCase()) || !wnd.has(char.toUpperCase())) {
                return false;
            }
        }
        return true;
    };

    //handle
    for (let i = 0; i < s.length; i++) {
        // init window
        let wnd = new Set();
        for (let j = i; j < s.length; j++) {
            // use set.add because if char is duplicate, skip it
            wnd.add(s[j]);
            // check isNice
            if (isNice(wnd)) {
                // because use Set and skip => can't use set.size()
                let length = j - i + 1; 
                if (length > maxLength) {
                    //update maxLength;
                    maxLength = length;
                    //update final niceSubString
                    res = s.substring(i, j + 1)
                }
            }
        }
    }
    return res;
};


console.log(longestNiceSubstring("YazaAay")); // Output: "aAa"
console.log(longestNiceSubstring("Bb")); // Output: "Bb"
console.log(longestNiceSubstring("c")); // Output: ""