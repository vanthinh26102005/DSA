/*
Input:
    + coins: An array of available coin denominations.
    + sum: The target sum you want to reach using the minimum number of coins.
Process:
    + sorted coins array in descending for using the most coin denomination
    + loop through each coin denomination to solve how many of that denomination 
    are needed to sum up to the target sum.
    + The remaining sum (sumRemain) is updated as coins are used.
Output:
    + An object containing  case the number of coin denominations,
    + The remaining sum 
*/
const greedy = (coins, sum) => {
  // sort - use descending for greedy algo
  coins.sort((a, b) => b - a); // time complexity: O(nlogn)
  console.log("coins: ", coins);
  console.log("sum:", sum);

  // initialize 2 variable to store the result and store the remaining sum.
  const result = {};
  let sumRemain = sum;

  // iterate over each coin denomination.
  for (let i = 0; i < coins.length; i++) {// time complexity: O(n)
    // calculate the number of coins of the current denomination that == the remaining sum.
    const numCoin = Math.floor(sumRemain / coins[i]);

    // if right , update the result and reduce the remaining sum.
    if (numCoin > 0) {
      result[coins[i] + " coin(s)"] = numCoin;
      sumRemain = sumRemain - numCoin * coins[i];
    }
    // else continue iterate
  }

  result.sumRemain = sumRemain;

  // Return the result array contains  coins and remaining sum.
  return result;
};

// Test cases
console.log(JSON.stringify(greedy([1, 2, 5], 21), null, 4));
console.log("========================");
console.log(JSON.stringify(greedy([2, 5], 21), null, 4));
console.log(JSON.stringify(greedy([5, 3, 2], 21), null, 4));
