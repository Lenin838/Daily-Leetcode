/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let prev = 0;
    let ans = 0;

    for (const row of bank) {
        let devices = 0;

        for (const ch of row) {
            if (ch === '1') devices++;
        }

        if (devices > 0) {
            ans += prev * devices;
            prev = devices;
        }
    }

    return ans;
};