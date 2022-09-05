/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * best-time-to-buy-and-sell-stock
 */
var maxProfit = function(prices) {
    var min =Number.POSITIVE_INFINITY;
    var maxprofit =0;
    for(let i=0;i<prices.length;i++){
        if (prices[i] < min)
            min = prices[i];
        else if (prices[i] - min > maxprofit)
            maxprofit = prices[i] - min;
    }
    return maxprofit;
};