//https://leetcode.com/problems/single-number/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number}
 */


var singleNumber = function(nums) {
    let result = 0;

    for (let num of nums) {
        result ^= num;
    }

    return result;
};

//i used  XOR since duplicates cancel out and only the unique element remains.
//Time: O(n), Space: O(1) 
