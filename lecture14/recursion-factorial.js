// function to return factorial (n!) of a given number `n`
const factorial = (n) => {
    console.log('n:', n)
    if(n === 1) return 1
    return n * factorial(n - 1)
  }
  // 3! = 3 * 2 * 1 = 6
  console.log(factorial(3)) // 6, [all cases stack up to WAIT FOR BASE CASE OUTPUT]