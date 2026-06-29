/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let a = Math.abs(x-z);
    let b = Math.abs(y-z);

    if(a > b) return 2;
    if(b > a) return 1;
    return 0;
};