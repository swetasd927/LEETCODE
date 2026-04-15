//https://leetcode.com/problems/max-consecutive-ones/description/?envType=problem-list-v2&envId=array
//Mid Level, Array

/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function(nums) {
    let max = 0, count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
            if (count > max) max = count; // faster than Math.max
        } else {
            count = 0;
        }
    }

    return max;
};

//This is a linear scan problem. I track consecutive ones and reset on zero. 
// It runs in O(n) time and O(1) space, which is optimal.