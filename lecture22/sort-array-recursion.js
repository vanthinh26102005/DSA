// sort array  of numbers small -> big

// plug in your logic to these blocks to use divide and conquer
// time: O(n log n) space: O(n)
const mergeSort = (arr) => {
  // exit condition (base case)
  if (arr.length === 1) return arr;

  // divide:
  let leftArr = mergeSort(arr.slice(0, arr.length / 2)); // <- bottom up
  let rightArr = mergeSort(arr.slice(arr.length / 2)); // <- bottom up

  // solve: in this case, there's no solve step.
  // because  single elemnet  array is already sorted

  // combine:
  const mergedArr = combine(leftArr, rightArr); // <- bottom up
  console.log("leftArr:", leftArr);
  console.log("rightArr:", rightArr);
  console.log("mergedArr:", mergedArr);
  console.log("-----------------");

  return mergedArr;
};

// combine sorted left & right arrrays
// time: O(x+y) space: O(x+y)

const combine = (leftArr, rightArr) => {
  const mergedArr = [];

  // starting indexes
  let leftArrIdx = 0;
  let rightArrIdx = 0;

  // combine two arr in asc order until one is empty
  while (leftArrIdx < leftArr.length && rightArrIdx < rightArr.length) {
    if (leftArr[leftArrIdx] <= rightArr[rightArrIdx]) {
      mergedArr.push(leftArr[leftArrIdx]);
      leftArrIdx++;
    } else {
      mergedArr.push(rightArr[rightArrIdx]);
      rightArrIdx++;
    }
  }

  // push all number left in leftArr to mergedArr
  while (leftArrIdx < leftArr.length) {
    mergedArr.push(leftArr[leftArrIdx]);
    leftArrIdx++;
  }

  //push all numbers left in rightArr to mergedArr
  while (rightArrIdx < rightArr.length) {
    mergedArr.push(rightArr[rightArrIdx]);
    rightArrIdx++;
  }
  return mergedArr;
};
const unsortedNumbers = [15, 26, 13, 7, 3, 5, 2, 22];
const sortedNumbersAscOrder = mergeSort(unsortedNumbers);
console.log(`unsorted array: [${unsortedNumbers}]`);
console.log(`sorted array: [${sortedNumbersAscOrder}]`);
