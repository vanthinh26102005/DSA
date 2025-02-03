// find 3 nums in array that adds up to a sum
// time complexitry : O(n^3)

// threeSum func using Two Pointers
const threeSumTwoPointers = (nums, sum) => {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {

    let left = i + 1;
    let right = nums.length - 1
    while(left < right ){
        let current = nums[i] + nums[left] + nums[right]
            
        if(current === sum) { // found target
            res.push([nums[i], nums[left], nums[right]])
            break
        }
        else if(current > sum) { // current sum bigger than target ,
            right--;  // move right pointer to the left
        }
        else {
            left++; // move left pointer to the right
        }
    }
  }

  return res;
};

console.log('1 For loop + Two Pointers:')
console.log(threeSumTwoPointers([15, 26, 13, 7, 3, 5, 2, 22], 30))