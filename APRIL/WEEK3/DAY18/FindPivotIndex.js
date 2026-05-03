//https://leetcode.com/problems/find-pivot-index/description/?envType=problem-list-v2&envId=array
//Mid level, Array, Prefix sum

/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function(nums) {
    let total = 0;

    for (let num of nums) {
        total += num;
    }

    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let rightSum = total - leftSum - nums[i];

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
};

/**
 * I first compute the total sum of the array. Then I iterate while maintaining a running 
 * left sum. At each index, I calculate the right sum as total minus left sum minus current 
 * element. If both are equal, that index is the pivot.

Time: O(n)
Space: O(1)
 */