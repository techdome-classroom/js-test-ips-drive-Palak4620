function smallestMissingPositiveInteger(nums) {

  const n = nums.length;
  // Step 1: Transform the array
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      swap(nums, i, nums[i] - 1);
    }
  }
  // Step 2: Find the smallest missing positive integer
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  // If all positive integers are present, return n + 1
  return n + 1;
}
function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
// Usage
const array = [3, 4, -1, 1];
const smallestMissing = findSmallestMissingPositive(array);
console.log('Smallest Missing Positive Integer:', smallestMissing);
  
  module.exports = smallestMissingPositiveInteger;

