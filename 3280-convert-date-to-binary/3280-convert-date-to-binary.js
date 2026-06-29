/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    return date.split("-").map((p)=>Number(p).toString(2)).join("-");
};