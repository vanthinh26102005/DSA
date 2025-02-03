/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // flag to compare
  const sortedArr = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    let left = 0;
    let right = sortedArr.length - 1;
    let idxToInsert = null;

    // binary search
    while (left <= right) {
      let mid = Math.ceil((left + right) / 2);
      if(mid===left && mid === right){
        if(nums[i] >= sortedArr[mid]){
            idxToInsert = mid + 1;
        }
        else {
            idxToInsert = mid;
        }
        break;
      }
      else if(sortedArr[mid] < nums[i]) {
        left = mid + 1;
      }
      else if(sortedArr[mid] > nums[i]){
        right = mid - 1;
      }
      else {// edge case(1), left = 1, mid = 2, right =3 
        idxToInsert = mid +1;
        break;
      }
    }

    // edge case(2), left = 0, mid = 1, right =1
    if(idxToInsert === null){
        idxToInsert = right + 1;
    } 
  sortedArr.splice(idxToInsert, 0, nums[i]);

  }

  return sortedArr;
};
