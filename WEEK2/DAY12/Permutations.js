//https://leetcode.com/problems/permutations/?envType=problem-list-v2&envId=rab78cw1
//Array, Backtracking

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
    const res = [];
    const used = new Array(nums.length).fill(false);

    function backtrack(path) {
        // base case
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            // choose
            used[i] = true;
            path.push(nums[i]);

            // explore
            backtrack(path);

            // un-choose (backtrack)
            path.pop();
            used[i] = false;
        }
    }

    backtrack([]);
    return res;
};

//Time: O(n × n!) (n! permutations, each takes O(n) to copy)
//Space:Recursion stack: O(n)
