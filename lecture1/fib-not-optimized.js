console.time ('compute fib not optimized time')
const fib = (n) => {
    if (n === 1) return 1
    if (n === 0) return 0
    return fib(n-1) + fib(n-2)
}

console.log(fib(40)) // 102334155
console.timeEnd('compute fib not optimized time')