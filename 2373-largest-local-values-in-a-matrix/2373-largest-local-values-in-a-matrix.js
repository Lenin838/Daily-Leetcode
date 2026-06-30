/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let n = grid.length;
    let ans = Array.from({ length: n-2},()=>Array(n-2).fill(0));

    for(let i=0;i<n-2;i++){
        for(let j=0;j<n-2;j++){
            let max=0;
            for(let r=i;r<i+3;r++){
                for(let c=j;c<j+3;c++){
                    max = Math.max(max,grid[r][c])
                }
            }
            ans[i][j] = max
        }
    }
    return ans;
};