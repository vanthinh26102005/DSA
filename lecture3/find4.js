
function find4( arr, targetSum) {
    const res = [];                                                // Time: 0;  Space: _                
    const n = arr.length ;                                         // Time: 0;  Space: _    

    function backtrack(start, current, currentSum){
        if(current.length === 4) {                                 // Time: 1:  Space: 0   
            if(currentSum === targetSum) {                         // Time: 1;  Space: 0 
                res.push([...current]);                            // Time: 4;  Space: 4
            }                                                      // Time: 1;  Space: 1 
            return;                                                // Time: 1;  Space: 0 
        }                                                          // Time: 1;  Space: 1
        for(let i = start; i < n ; i++) {                          // Time: n;  Space: 0 
            current.push(arr[i]);                                  // Time: 1;  Space: 1         
            backtrack(i+1, current, currentSum + arr[i]);          // Time: n^4;  Space: 4
            current.pop(); // Remove the element to backtrack      // Time: 1;  Space: 1         
        }// Time: 1;  Space: 1
        
    }
    backtrack(0, [], 0);                                            // Time: 1;  Space: 1    
    return res;                                                     // Time: 1;  Space: 1    
}
                                                            // Total ------------------------------
                                                            //       Time: n^4 + n +11;  Space: 12  

const arr = [2,4,5,1,6];                                    
const targetSum = 13;                                               
console.log(find4(arr, targetSum));                             



