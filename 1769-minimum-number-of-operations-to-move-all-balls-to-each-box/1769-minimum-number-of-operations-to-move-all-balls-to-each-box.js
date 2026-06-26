/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let n = boxes.length;
    let ans = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let moves = 0;

        for (let j = 0; j < n; j++) {
            if (boxes[j] === '1') {
                moves += Math.abs(i - j);
            }
        }

        ans[i] = moves;
    }

    return ans;
};