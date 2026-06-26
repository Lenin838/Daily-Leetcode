/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let maxDigit = 0;

    for (let ch of n) {
        maxDigit = Math.max(maxDigit, Number(ch));

        if (maxDigit === 9) {
            return 9;
        }
    }

    return maxDigit;
};