/**
 * Given an array of integers nums and an integer target, return 
 * indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

//Time complexity: Outer loop runs n times (i=0 to n-1)
//Inner loop runs roughly n-1, n-2, times , total almost n^2 /2, 
//Big O otation ignores contants -> O(n^2)

//Space complexity: we dont use extra space except a few variable
//O(1)