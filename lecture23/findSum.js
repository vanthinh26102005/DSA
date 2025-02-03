// find2 - with O(n^2) time complexity
const findTwoLoop = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return [arr[i], arr[j]];
      }
    }
    return [];
  }
};
// compl

// find2 - with O(nlogn) time complexity

const findTwo = (arr, sum) => {
  arr.sort((a, b) => a - b); // sort ASC
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === sum) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] < sum) {
      left++;
    } else {
      right--;
    }
  }

  return [];
};

console.log("findTwo: ", findTwo([1, 2, 3, 4, 5, 6], 7)); // [1, 6]
console.log("findTwoLoop: ", findTwoLoop([1, 2, 3, 4, 5, 6], 7)); // [1, 6]

const findThree = (arr, sum) => {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[i] + arr[left] + arr[right] === sum) {
        return [arr[i], arr[left], arr[right]];
      } else if (arr[i] + arr[left] + arr[right] < sum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return [];
};

console.log("findThree: ", findThree([1, 2, 3, 4, 5, 6], 12)); // [1, 5, 6]

const findFour = (arr, sum) => {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 3; i++) {
    for (let j = i + 1; j < arr.length - 2; i++) {
      let left = j + 1;
      let right = arr.length - 1;

      if (arr[i] + arr[j] + arr[left] + arr[right] === sum) {
        return [arr[i], arr[j], arr[left], arr[right]];
      } else if (arr[i] + arr[j] + arr[left] + arr[right] < sum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return []
};

console.log("findFour: ", findFour([1, 2, 3, 4, 5, 6], 12)); // [1, 2, 3, 6]
