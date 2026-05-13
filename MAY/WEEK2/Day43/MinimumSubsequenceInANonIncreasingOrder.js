//https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/?envType=problem-list-v2&envId=greedy

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var minSubsequence = function(nums) {
    // sort descending
    nums.sort((a, b) => b - a);

    let totalSum = nums.reduce((sum, num) => sum + num, 0);

    let currentSum = 0;
    let result = [];

    for (let num of nums) {
        currentSum += num;
        result.push(num);

        // strictly greater condition
        if (currentSum > totalSum - currentSum) {
            break;
        }
    }

    return result;
};

//I used a greedy approach by sorting the array in descending order and continuously 
//taking the largest elements until the chosen subsequence sum becomes strictly greater 
//than the remaining sum. Sorting gives O(n log n) time complexity.