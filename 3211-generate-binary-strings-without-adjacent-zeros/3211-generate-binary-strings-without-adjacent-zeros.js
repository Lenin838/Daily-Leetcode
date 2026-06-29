/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    const result = [];
    function backTrack(str){
        if(str.length === n){
            result.push(str);
            return;
        }
        backTrack(str+"1")
        if(str.length === 0 || str[str.length-1]==="1"){
            backTrack(str+"0")
        }
    }
    backTrack("");
    return result;
};