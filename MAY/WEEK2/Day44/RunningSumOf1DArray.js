//https://leetcode.com/problems/running-sum-of-1d-array/description/?envType=problem-list-v2&envId=prefix-sum

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function(nums) {
    let sum = 0;
    let result = [];

    for (let num of nums) {
        sum += num;
        result.push(sum);
    }

    return result;
};

//I used a running sum variable while iterating through the array 
//and pushed the cumulative sum at each step. Time complexity 
//is O(n) with O(n) space for output.