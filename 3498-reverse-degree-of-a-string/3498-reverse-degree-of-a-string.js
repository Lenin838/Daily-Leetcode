/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let ans = 0
    for(let i=0;i<s.length;i++){
        let value = 26-(s.charCodeAt(i)-'a'.charCodeAt(0));
        ans += value * (i+1)
    }
    return ans;
};