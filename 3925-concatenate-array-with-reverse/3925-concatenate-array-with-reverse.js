/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    let result = [];
    for(let i=0;i<nums.length;i++){
        result.push(nums[i])
    }

    for(let i=nums.length-1;i>=0;i--){
        result.push(nums[i])
    }

    return result;
};