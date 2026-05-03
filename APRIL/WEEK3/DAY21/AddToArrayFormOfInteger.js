//https://leetcode.com/problems/add-to-array-form-of-integer/?envType=problem-list-v2&envId=array
//Senior Array Math

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */

var addToArrayForm = function(num, k) {
    let i = num.length - 1;

    while (i >= 0 || k > 0) {
        if (i >= 0) {
            k += num[i];
            num[i] = k % 10;
            i--;
        } else {
            num.unshift(k % 10);
        }
        k = Math.floor(k / 10);
    }

    return num;
};

//Simulate digit-wise addition from the end, adding k and carrying forward.
//Time: O(n + log k)
//Space: O(1) 