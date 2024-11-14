console.time('compute fib optimized time');

const fib = (n) => {
    let fn_2 = 0;               // Time: 1 , Space:1
    let fn_1 = 1;               //Time: 1 , Space: 1

    if (n === 0) return fn_2;   // Time: 2  , Space: 1 (retunr -> space = 0)
    if (n === 1) return fn_1;   // Time: 2  , Space: 1

    let fn = 0;                 // Time:1  , Space:1
    for (let i = 2; i <= n; i++) {  // Time: n  , Space:1
        fn = fn_1 + fn_2;       // Time:  n, Space: 1
        fn_2 = fn_1;            // Time:  n, Space:1
        fn_1 = fn;              // Time:  n, Space:1
    }
    return fn;                  // Time: n, Space: 9
};
                        // Total -------------------------------
                        // Time: 4n + 6, Space: n + 2

console.log(fib(10)); 
console.timeEnd('compute fib optimized time');
// time : O(n),
// space: O(1),