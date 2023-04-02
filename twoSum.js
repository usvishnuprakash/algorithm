/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (hashMap.has(compliment)) {
      return [hashMap.get(compliment), i];
    }
    hashMap.set(nums[i], i);
  }
  return -1;
};

console.log(twoSum([2, 7, 11, 15], 9));
