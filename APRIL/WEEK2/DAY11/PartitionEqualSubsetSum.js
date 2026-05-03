//https://leetcode.com/problems/partition-equal-subset-sum/description/?envType=problem-list-v2&envId=rab78cw1


/**
 * @param {number[]} nums
 * @return {boolean}
 */
 
function canPartition(nums) {
    let total = nums.reduce((a, b) => a + b, 0);

    if (total % 2 !== 0) return false;

    let target = total / 2;
    let dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for (let num of nums) {
        for (let s = target; s >= num; s--) {
            dp[s] = dp[s] || dp[s - num];
        }
    }

    return dp[target];
}
/*
 I use a dynamic programming approach where I track which sums are possible using the given numbers.

Define target = total / 2
Use a boolean array dp
dp[s] = true means sum s is achievable
 */

//Time: O(n × target), Space: O(target)