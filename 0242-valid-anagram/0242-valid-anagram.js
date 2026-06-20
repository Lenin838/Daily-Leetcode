/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let f = t.split("").sort().join("");
    let g = s.split("").sort().join("");
    console.log(f)
    console.log(g)
    if(f === g){
        return true;
    }
    return false
};