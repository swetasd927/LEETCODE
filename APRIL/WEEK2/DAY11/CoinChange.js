//https://leetcode.com/problems/coin-change/description/?envType=problem-list-v2&envId=rab78cw1
//Array, Dynamic Programming, BFS


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

 function coinChange(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

//I use dynamic programming where dp[i] represents the minimum coins required for amount i. 
// For each i, I try all coins and take the minimum of previous states plus one coin.


//Time:O(amount × coins.length)
//Space:O(amount)