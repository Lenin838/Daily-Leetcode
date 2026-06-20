/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.sort((a,b)=>a-b);
    for(let i=0;i<=n.length;i++){
        if(!n.includes(i)){
            return i;
        }
    }
};