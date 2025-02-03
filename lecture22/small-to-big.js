//3 steps:
/*
    1. divide
    2. solve
    3. combine
    */
// mergeSort - recursive function
const mergeSort = (arr) => {
  // exit condition (base case)
  if (arr.length === 1) return arr;

  // divide:
  let leftArr = mergeSort(arr.slice(0, arr.length / 2));
  let rightArr = mergeSort(arr.slice(arr.length / 2));

  // solve: no need because 1 element is already sorted

  // combine:
  const mergedArr = combine(leftArr, rightArr);
  return mergedArr;
};

// combine function

const combine = (leftArr, rightArr) => {
  const mergedArr = [];

  let leftArrIdx = 0;
  let rightArrIdx = 0;

  while (leftArrIdx < leftArr.length && rightArrIdx < rightArr.length) {
    // compare leftArr and rightArr elements
    if (leftArr[leftArrIdx] <= rightArr[rightArrIdx]) {
      mergedArr.push(leftArr[leftArrIdx]);
      leftArrIdx++;
    } else {
      mergedArr.push(rightArr[rightArrIdx]);
      rightArrIdx++;
    }
  }
  // handle if length of leftArr and rightArr are different

  // if leftArr has more elements
  while (leftArrIdx < leftArr.length) {
    mergedArr.push(leftArr[leftArrIdx]);
    leftArrIdx++;
  }

  // if rightArr has more elements
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

// ******************************

// binarySearch - FOR loop function

const sortArrayForLoop = (arr) => {
  const sortedArr = [arr[0]]; // get one element as a root for another comparison
  for (let i = 1; i < arr.length; i++) { // skip first element
    let left = 0;
    let right = sortedArr.length - 1;
    let insertedIdx = null;
    // binary search in sortedArr to find the index to insert arr[i]
    while (left <= right) {
      let mid = Math.ceil((left + right) / 2);
      if (mid === left && mid === right) {
        // case: only 1 element in sortedArr
        if (arr[i] >= sortedArr[mid]) {
          insertedIdx = mid + 1;
        } else {
          insertedIdx = mid;
        }
        break;
      } else if (arr[i] > sortedArr[mid]) {
        left = mid + 1;
      } else if (arr[i] < sortedArr[mid]) {
        right = mid - 1;
      } else { // if arr[i] === sortedArr[mid] -> don't need to find more
        insertedIdx = mid + 1;
        break;
      }
    }
    // edge case: left = 0, mid = 1, right = 1
    // for this case, left, mid, right don't converge => infinite loop
    if(insertedIdx === null) {
      insertedIdx = right + 1;
    }

    // insert arr[i]
    sortedArr.splice(insertedIdx,0, arr[i]);
  }
  return sortedArr;
};
console.log('-----------------');
const unsortedNumbers1 = [15, 26, 13, 7, 3, 5, 2, 22];
const sortedNumbersAscOrder1 = sortArrayForLoop(unsortedNumbers);
console.log(`unsorted array: [${unsortedNumbers1}]`);
console.log(`sorted array: [${sortedNumbersAscOrder1}]`);

console.log(sortArrayForLoop([-7,-5,-1,7,-4,-1,0,0,4,9])) // edge case (1), (2), loop runs forever
console.log(sortArrayForLoop([-4,0,7,4,9,-5,-1,0,-7,-1])) // edge case (2), left, mid, right don't converge when (left = 0, mid = 1, right = 1)