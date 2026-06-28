/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {

    let maxOr = 0;

    for (let num of nums) {
        maxOr |= num;
    }

    let count = 0;

    function dfs(index, currentOr) {

        if (index === nums.length) {
            if (currentOr === maxOr) {
                count++;
            }
            return;
        }

        dfs(index + 1, currentOr);

        dfs(index + 1, currentOr | nums[index]);
    }

    dfs(0, 0);

    return count;
};