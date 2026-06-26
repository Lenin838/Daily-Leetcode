/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let ans = 0;

    function dfs(index, xor) {
        if (index === nums.length) {
            ans += xor;
            return;
        }

        dfs(index + 1, xor);

        dfs(index + 1, xor ^ nums[index]);
    }

    dfs(0, 0);

    return ans;
};