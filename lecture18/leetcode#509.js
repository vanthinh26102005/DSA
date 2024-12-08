function fibonancci(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;

    let a = 0;// fib0
    let b = 1;// fib1
    let fib = 0;

    for(let i =2; i <=n ; i++) {
        fib = a + b; // next fib = 2 previous fib
        a = b; // shift a -> b (next number);
        b = fib; // shift b to new fib
    }

    return fib;
}

console.log(fibonancci(3))
console.log(fibonancci(4))
console.log(fibonancci(5))