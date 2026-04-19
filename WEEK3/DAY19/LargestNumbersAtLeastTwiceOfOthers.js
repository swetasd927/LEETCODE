//https://leetcode.com/problems/largest-number-at-least-twice-of-others/description/?envType=problem-list-v2&envId=array
//Mid level, array, sorting

/**
 * @param {number[]} nums
 * @return {number}
 */

function dominantIndex(nums) {
    let max = -1;
    let secondMax = -1;
    let index = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            secondMax = max;
            max = nums[i];
            index = i;
        } else if (nums[i] > secondMax) {
            secondMax = nums[i];
        }
    }

    return max >= 2 * secondMax ? index : -1;
}


//better
function dominantIndex(nums) {
    let max = Math.max(...nums);
    let index = nums.indexOf(max);

    for (let num of nums) {
        if (num !== max && max < 2 * num) {
            return -1;
        }
    }

    return index;
}

/**
 I track the largest and second largest elements in one pass, then check if the largest 
 is at least twice the second largest.

 Time: O(n) Space: O(1)

 */