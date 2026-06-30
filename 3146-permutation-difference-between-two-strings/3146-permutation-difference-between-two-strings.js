/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let map = new Map();
    for(let i=0;i<s.length;i++){
        map.set(s[i],i)
    }
    let ans = 0;
    for(let i=0;i<t.length;i++){
        ans += Math.abs(map.get(t[i])-i)
    }
    return ans;
};