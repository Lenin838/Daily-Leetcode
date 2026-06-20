/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = new Set([
        "a","e","i","o","u",
        "A","E","I","O","U"
    ])
    let split = s.split("");
    let left = 0;
    let right = split.length-1;
    while(left < right){
        while(left < right && !vowels.has(split[left])){
            left++;
        }
        while(left < right && !vowels.has(split[right])){
            right--
        }
        [split[left],split[right]] = [split[right],split[left]]
        left++;
        right--;
    }
    return split.join("")
};