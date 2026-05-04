//https://leetcode.com/problems/n-repeated-element-in-size-2n-array/description/?envType=problem-list-v2&envId=hash-table

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let seen = new Set();
    for (let n of nums) {
        if (seen.has(n)) return n;
        seen.add(n);
    }
};

//one number repeats heavily, it will appear nearby—just
// check neighbors or use a set to detect the duplicate.
//TC: O(n), SC: O(1)