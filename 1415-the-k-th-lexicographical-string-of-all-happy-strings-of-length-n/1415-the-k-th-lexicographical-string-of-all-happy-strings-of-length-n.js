/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    const result = [];
    const chars = ['a','b','c'];
    function backTrack(str){
        if(str.length === n){
            result.push(str)
            return;
        }
        for(let ch of chars){
            if(str.length === 0 || str[str.length-1] !== ch){
                backTrack(str + ch)
            }
        }
    }
    backTrack("");
    return result[k-1] || ""
};