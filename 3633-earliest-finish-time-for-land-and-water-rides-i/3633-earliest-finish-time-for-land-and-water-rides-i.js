/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    function calc(start1,dur1,start2,dur2){
        let ans = Infinity;
        for(let i=0;i<start1.length;i++){
            let firstEnd = start1[i] + dur1[i];
            for(let j=0;j<start2.length;j++){
                let secondEnd = Math.max(firstEnd,start2[j])+dur2[j];
                ans = Math.min(ans,secondEnd)
            }
        }
        return ans;
    }
    const landThenWater = calc(
        landStartTime,
        landDuration,
        waterStartTime,
        waterDuration
    )

    const waterThenLand = calc(
        waterStartTime,
        waterDuration,
        landStartTime,
        landDuration
    )

    return Math.min(landThenWater,waterThenLand);
};