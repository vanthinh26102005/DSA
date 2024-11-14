var letterCombinations = function(digits) {
    if (!digits) return [];  // Base case: If input is empty, return an empty array.
    
    // Define the mapping of digits to letters.
    const digitToLetters = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };
    
    let result = [];  // To store the final combinations.
    let currentCombination = '';  // To build each combination.
    
    // Start the backtracking process from index 0.
    function backtrack(idx) {
        // Base case: If we have processed all digits, push the current combination to the result.
        if (idx === digits.length) {
            result.push(currentCombination);
            return;
        }
        
        // Loop through each letter mapped to the current digit.
        for (let letter of digitToLetters[digits[idx]]) {
            currentCombination += letter;  // Add the current letter to the combination.
            backtrack(idx + 1);  // Recurse to the next digit.
            currentCombination = currentCombination.slice(0, -1);  // Remove the last letter to explore other possibilities.
        }
    }
    
    backtrack(0);  // Start the recursion from index 0.
    return result;  // Return the final list of combinations.
};

// Example usage
let digits = "23";
let result = letterCombinations(digits);
console.log(result);
