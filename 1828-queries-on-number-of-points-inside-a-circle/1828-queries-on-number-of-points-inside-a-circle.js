/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    const ans = [];
    for(const [cx,cy,r] of queries){
        let count = 0;
        for(const [x,y] of points){
            let dx = x - cx;
            let dy = y - cy;
            if(dx*dx + dy*dy <= r*r){
                count++;
            }
        }
        ans.push(count);
    }
    return ans;
};