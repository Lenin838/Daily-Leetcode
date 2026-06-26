/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let ans = "";

    for (let word of words) {
        let sum = 0;

        for (let ch of word) {
            sum += weights[ch.charCodeAt(0) - 97];
        }

        let rem = sum % 26;

        ans += String.fromCharCode('z'.charCodeAt(0) - rem);
    }

    return ans;
};