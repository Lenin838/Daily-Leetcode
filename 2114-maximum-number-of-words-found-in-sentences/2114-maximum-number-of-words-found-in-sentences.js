/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let count = 0;
    let arr = [];
    for(let i=0;i<sentences.length;i++){
        let split = sentences[i].split(" ").length;
        arr.push(split);
    }
    return Math.max(...arr);
};