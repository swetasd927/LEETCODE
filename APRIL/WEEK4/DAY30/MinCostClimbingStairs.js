//https://leetcode.com/problems/min-cost-climbing-stairs/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    for (let i = 2; i < cost.length; i++) {
        cost[i] += Math.min(cost[i - 1], cost[i - 2]);
    }

    return Math.min(
        cost[cost.length - 1],
        cost[cost.length - 2]
    );
};

//Use DP in-place by adding the minimum cost of the previous
// one or 
// two steps, then return the min of the last two steps.

//Time Complexity: O(n)
// Space Complexity: O(1)