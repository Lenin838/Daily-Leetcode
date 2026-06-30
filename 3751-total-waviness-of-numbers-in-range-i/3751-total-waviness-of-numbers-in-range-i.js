/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    let ans = 0;

    for (let num = num1; num <= num2; num++) {
        const s = num.toString();

        for (let i = 1; i < s.length - 1; i++) {
            const prev = s.charCodeAt(i - 1);
            const cur = s.charCodeAt(i);
            const next = s.charCodeAt(i + 1);

            if (cur > prev && cur > next) {
                ans++;
            }
            else if (cur < prev && cur < next) {
                ans++;
            }
        }
    }

    return ans;
};