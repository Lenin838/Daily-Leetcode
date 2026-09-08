/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let num = nums.sort((a,b)=>a-b);
    let ans = [];
    console.log(num);
    for(let i=0;i<num.length;i++){
        if(nums[i] === target){
            ans.push(i);
        }
    }
    return ans;
};