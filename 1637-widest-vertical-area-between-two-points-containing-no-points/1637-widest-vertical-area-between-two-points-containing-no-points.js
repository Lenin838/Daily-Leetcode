/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    const map = points.map((p)=>p[0]);
    map.sort((a,b)=>a-b);
    let maxGap = 0;
    for(let i=1;i<map.length;i++){
        maxGap = Math.max(maxGap, map[i]-map[i-1])
    }
    return maxGap;
};