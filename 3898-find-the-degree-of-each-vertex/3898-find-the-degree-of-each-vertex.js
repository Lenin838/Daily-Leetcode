/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    let degrees = [];

    for (let i = 0; i < matrix.length; i++) {
        let count = 0;

        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                count++;
            }
        }

        degrees.push(count);
    }

    return degrees;
};