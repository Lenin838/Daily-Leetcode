/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let num = n;
    let count = 0;
    for(let i=1;i<=n;i++){
        if(num < i){
            break;
        }
        num -= i;
        count++;
    }
    return count;
};