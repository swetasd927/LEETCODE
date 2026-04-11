//Grind75: array + greedy

//tracking minimum price till now[buy]
//maximum profit : sell
//Logic: keep updating the minimum price and calculate the max profit at each step

var maxProfit = (prices) => {
    let min = prices[0];
    let profit = 0;
    for(let i=1; i<prices.length; i++){
        max= Math.min(min,prices[i]);
        profit = Math.max(profit, prices[i] -min);
    }
    return profit;
}
//Time complexity: O(n): we traverse the array only onces
//Space complexity: O(1): no extra space used only variables