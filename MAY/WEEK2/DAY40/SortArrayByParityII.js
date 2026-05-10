//https://leetcode.com/problems/sort-array-by-parity-ii/submissions/1999704550/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
var sortArrayByParityII = function(nums) {
    let res = new Array(nums.length);

    let even = 0;
    let odd = 1;

    for (let num of nums) {
        if (num % 2 === 0) {
            res[even] = num;
            even += 2;
        } else {
            res[odd] = num;
            odd += 2;
        }
    }

    return res;
};
//time: O(n), space: O(n)

//Use two pointers for even and odd indices, placing
//each number directly into its correct parity position.