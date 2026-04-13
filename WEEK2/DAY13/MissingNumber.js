//https://leetcode.com/problems/missing-number/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number}
 */


var missingNumber = function(nums) {
    let n = nums.length;
    let expected = n * (n + 1) / 2;

    let actual = 0;
    for (let num of nums) {
        actual += num;
    }

    return expected - actual;
};

//First I find n, then calculate expected sum using n(n+1)/2. 
// Then I subtract the actual sum of the array. The remaining value
//  is the missing number.


//Time: O(n) Space: O(1)