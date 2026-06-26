/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let total = nums.reduce((sum, num) => sum + num, 0);

    let left = 0;
    let right = total;

    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        right -= nums[i];
        ans.push(Math.abs(left - right));
        left += nums[i];
    }

    return ans;
};