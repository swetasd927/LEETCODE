//https://leetcode.com/problems/array-partition/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number}
 */

var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);

    let sum = 0;

    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }

    return sum;
};

//To maximize the sum of minimums, I sort the array and pair adjacent elements. 
// This ensures each pair has the smallest possible gap, so the minimum values 
// are as large as possible overall.

//Time: O(n log n) (sorting)
//Space: O(1) (if sorting in-place)

