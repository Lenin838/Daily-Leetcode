/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = Math.min(...salary);
    let max = Math.max(...salary);
    let sum = 0;
    let average = 0;
    let count = 0;
    for(let i=0;i<salary.length;i++){
        if(salary[i]!==min && salary[i]!==max){
            sum+=salary[i];
            count++;
        }
    }
    average = sum / count;
    return average;

};