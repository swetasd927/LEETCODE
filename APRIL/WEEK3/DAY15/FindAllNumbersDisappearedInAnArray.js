//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/?envType=problem-list-v2&envId=array
//Array, Hashtable

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function(nums) {
    // mark visited indices
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;

        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    let result = [];

    // collect missing numbers
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
};

// Since values are in range [1, n], I use indices to mark presence. For each number, I go to its
//corresponding index and mark it negative. After that, any index that remains positive means that 
// number is missing.


//Time: O(n) (two passes)
//Space: O(1) (no extra space, ignoring output)
