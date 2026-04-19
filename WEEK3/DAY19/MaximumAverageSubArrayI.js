//https://leetcode.com/problems/maximum-average-subarray-i/?envType=problem-list-v2&envId=array
//Mid Level, Array, Sliding Window

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 function findMaxAverage(nums, k) {
    let windowSum = 0;

    // first window
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum = windowSum;

    // slide window
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum / k;
}

/**
I used a sliding window of size k, updating the sum in constant time by adding the next 
element and removing the previous one, which gives an O(n) solution.

Time: O(n)
Space: O(1)

 */