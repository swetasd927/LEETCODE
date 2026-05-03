//https://leetcode.com/problems/subsets/description/?envType=problem-list-v2&envId=rab78cw1
//Array, Backtracking, Bit Manipulation

//I use backtracking where at each index I choose to include or exclude 
// the element, and recursively build all subsets

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function subsets(nums) {
    let result = [];

    function backtrack(start, path) {
        // add current subset
        result.push([...path]);

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);        // choose
            backtrack(i + 1, path);    // explore
            path.pop();                // undo (backtrack)
        }
    }

    backtrack(0, []);
    return result;
}

//Time: O(2^n) (each element has 2 choices)
// Space: O(n) recursion depth (excluding output)