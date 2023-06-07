/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      let same = 1;
      for(let j = i + 1; j <= nums.length; j++) {
        if (nums[i] === nums[j])
          same++;
      }
      nums.splice(i, same - 1);
    }
  }
  return nums.length;
};
