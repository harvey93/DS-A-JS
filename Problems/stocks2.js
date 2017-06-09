const stocks2 = prices => {
    let maxProfit = 0;
    for(let i = 0; i < prices.length - 1; i++) {
        if(prices[i + 1] > prices[i]) {
            maxProfit += prices[i + 1] - prices[i];
        }
    }
    return maxProfit;
};

console.log(stocks2([100, 180, 260, 310, 40, 535, 695]));