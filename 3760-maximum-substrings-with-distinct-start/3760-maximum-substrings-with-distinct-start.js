/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    let split = s.split("");
    let out = [...new Set(split)];
    let count = 0;
    for(let i=0;i<out.length;i++){
        count++;
    }
    return count;
};