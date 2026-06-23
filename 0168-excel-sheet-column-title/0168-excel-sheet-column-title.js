/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = ""
    while(columnNumber > 0){
        columnNumber--;
        let rem = columnNumber % 26
        result = String.fromCharCode(rem + 65) + result;
        columnNumber = Math.floor(columnNumber/26)
    }
    return result;
};