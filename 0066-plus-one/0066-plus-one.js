/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let v= BigInt(digits.join(''))+BigInt(1);
    let r = v.toString().split('').map(Number);
    return r;
   
    
    
    
};