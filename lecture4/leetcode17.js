function letterCombinations(digit) {            
    if (digit === "") return [];                                                                      //Time: 1  ; Space: 1

    const digitToLetters = { // initialze our keyborad                                                //Time: 1  ; Space: 1                        
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'ijk',                                             
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz',                                               
         
    }
    let res = []; // store our final res                                                              //Time: 1  ; Space: 1
    let currentCombination = "" // store our current combination                                         

    function backtrack(idx) {                                                                       
        if(idx === digit.length) {                                                                    //Time: 1  ; Space: 1                                    
            res.push(currentCombination);                                                             //Time: 1  ; Space: n
            return;                                                                                   //Time: 1  ; Space: 1      
        }

        for( let letter of digitToLetters[digit[idx]]) {                                             //Time: 4  ; Space: 1   
            currentCombination += letter;                                                            //Time: 1  ; Space: 1                
            backtrack(idx+1);                                                                        //Time: 4^n  ; Space: n 
            currentCombination= currentCombination.slice(0, -1);                                     //Time: 1  ; Space: 1   
            /*
            slice() takes only 2 parameters — the first is the index at which to begin extraction,
             and the second is the index at which to stop extraction (extraction will occur up to,
              but not including the element at this index
            */
        }
    }
    backtrack(0 )                                                                                   //Time: 4^n  ; Space: 1   
    return res;                                                                                     //Time: 1  ; Space: n 

}
                                                                                        // Total -----------------------------------------
                                                                                                // Time: 2x4^n+13 ; Space: 3n+9
let digit ="23";
let res = letterCombinations(digit);
console.log(res);