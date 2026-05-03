//https://leetcode.com/problems/sort-array-by-parity/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArrayByParity = function(nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        if (nums[left] % 2 > nums[right] % 2) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
        }

        if (nums[left] % 2 === 0) left++;
        if (nums[right] % 2 === 1) right--;
    }

    return nums;
};

//Use two pointers—place even numbers at the front and 
// odd numbers at the back by swapping when needed.

//Time Complexity: O(n)
//Space Complexity: O(1)