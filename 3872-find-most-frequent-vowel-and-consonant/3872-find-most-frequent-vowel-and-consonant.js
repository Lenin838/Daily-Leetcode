/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let freq = {};
    let freq1 = {};
    let vowels = 'aeiou';
    let sum = 0;

    for(let a of s){
        if(vowels.includes(a)){
            freq[a] = (freq[a] || 0) + 1;
        }else{
            freq1[a] = (freq1[a] || 0) + 1;
        }
    }
    let max = null;
    for(let b in freq){
        if(freq[b] > max){
            max  = freq[b];
        }
    }
    let max1 = null;
    for(let c in freq1){
        if(freq1[c] > max1){
            max1 = freq1[c];
        }
    }
    sum = max+max1;
    return sum;
};