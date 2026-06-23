/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minProfit = Infinity;
  let maxProfit = 0
  for(let i=0;i<prices.length;i++){
    minProfit = Math.min(minProfit,prices[i])
    let profit = prices[i] - minProfit

    maxProfit = Math.max(maxProfit, profit)
  }
  return maxProfit;  
};