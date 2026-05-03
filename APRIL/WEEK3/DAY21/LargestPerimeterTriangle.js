//https://leetcode.com/problems/largest-perimeter-triangle/?envType=problem-list-v2&envId=array
//Senior Array Math Greedy Sorting


/**
 * @param {number[]} nums
 * @return {number}
 */

var largestPerimeter = function(nums) {
    nums.sort((a, b) => b - a); // descending

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] < nums[i + 1] + nums[i + 2]) {
            return nums[i] + nums[i + 1] + nums[i + 2];
        }
    }
    return 0;
};

//Sort in descending order and find the first triplet where sum of two smaller sides is greater 
// than the largest.

//Time: O(n log n) due to sorting
//Space: O(1) ignoring sort space / in-place
