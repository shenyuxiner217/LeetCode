/**
 * @param {number[]} nums
 * @return {number}
 * Time: O(n)
 * Space: O(1)
 */
 
var maxProduct = function(nums) {
    nums[0] = [nums[0], nums[0]]
    let result = nums[0][1]
    for (let i = 1; i <= nums.length - 1; i++) {
        const pair = []
        pair[0] = Math.min(nums[i - 1][0] * nums[i], nums[i - 1][1] * nums[i], nums[i])
        pair[1] = Math.max(nums[i - 1][0] * nums[i], nums[i - 1][1] * nums[i], nums[i])
        nums[i] = pair
      // need to record the largest everytime because the result may happen at any position
        result = Math.max(result, nums[i][1])
    }
    return result
};
