//https://leetcode.com/problems/set-mismatch/?envType=problem-list-v2&envId=array
//Mid level, array, hash table, bit manipulation, sorting

/**
 * @param {number[]} nums
 * @return {number[]}
 */
//optimised
 
function findErrorNums(nums) {
    let duplicate = -1;
    let missing = -1;

    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;

        if (nums[index] < 0) {
            duplicate = Math.abs(nums[i]);
        } else {
            nums[index] *= -1;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            missing = i + 1;
        }
    }

    return [duplicate, missing];
}

//I used index marking to detect the duplicate and identify the missing index in O(n) time and O(1) space.