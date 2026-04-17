//https://leetcode.com/problems/maximum-product-of-three-numbers/?envType=problem-list-v2&envId=array


/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumProduct = function(nums) {
    nums.sort((a, b) => a - b);

    let n = nums.length;

    let option1 = nums[n-1] * nums[n-2] * nums[n-3];
    let option2 = nums[0] * nums[1] * nums[n-1];

    return Math.max(option1, option2);
};

//The maximum product can either come from the three largest numbers or from two smallest 
// negatives and the largest positive. I compute both and return the maximum.

//Time: O(n log n) (sorting)
//Space: O(1)

