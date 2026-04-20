//https://leetcode.com/problems/smallest-range-i/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var smallestRangeI = function(nums, k) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    return Math.max(0, max - min - 2 * k);
};

//Each number can be increased or decreased by up to k. To minimize the difference 
// between max and min, I increase the minimum values by k and decrease the maximum v
// alues by k.So the new difference becomes (max - min - 2k). If it becomes negative, I return 0.

//Time: O(n)
//Space: O(1)