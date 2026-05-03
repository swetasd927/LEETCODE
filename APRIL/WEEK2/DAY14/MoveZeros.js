//https://leetcode.com/problems/move-zeroes/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    let j = 0; // position for next non-zero

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }
};

//“I use a two-pointer approach. One pointer tracks where the next non-zero element should go. 
// I iterate through the array, and whenever I find a non-zero, I swap it into position. 
// This keeps relative order and moves all zeroes to the end in O(n) time and O(1) space

//Time: O(n), Space: O(1) (in-place)