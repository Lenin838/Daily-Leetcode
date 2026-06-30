/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let XOR = start ^ goal;
    let num = 0;
    while(XOR !== 0){
        XOR &= (XOR-1)
        num++
    }
    return num;
};