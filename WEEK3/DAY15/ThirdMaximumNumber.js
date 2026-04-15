//https://leetcode.com/problems/third-maximum-number/?envType=problem-list-v2&envId=array
//Array, Sorting

/**
 * @param {number[]} nums
 * @return {number}
 */

var thirdMax = function(nums) {
    let max1 = null, max2 = null, max3 = null;

    for (let num of nums) {
        // skip duplicates
        if (num === max1 || num === max2 || num === max3) continue;

        if (max1 === null || num > max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (max2 === null || num > max2) {
            max3 = max2;
            max2 = num;
        } else if (max3 === null || num > max3) {
            max3 = num;
        }
    }

    return max3 === null ? max1 : max3;
};
// I keep track of the top 3 distinct maximum numbers using three variables. While iterating, I skip 
// duplicates and update the three values accordingly. At the end, if the third maximum doesn’t exist, 
// I return the maximum.

//Time: O(n)  one pass
//Space: O(1)  no extra space