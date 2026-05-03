//https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length && k > 0; i++) {
        if (nums[i] < 0) {
            nums[i] = -nums[i];
            k--;
        }
    }

    nums.sort((a, b) => a - b);

    if (k % 2 === 1) {
        nums[0] = -nums[0];
    }

    return nums.reduce((sum, num) => sum + num, 0);
};

//Flip negative numbers first to maximize sum, then 
//if k is still odd, flip the smallest number once more.

//Time Complexity: O(n log n)
//Space Complexity: O(1)