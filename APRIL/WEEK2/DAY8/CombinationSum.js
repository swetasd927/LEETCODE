//https://leetcode.com/problems/combination-sum/description/?envType=problem-list-v2&envId=rab78cw1



/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];

    function backtrack(start, path, sum) {
        if (sum === target) {
            res.push([...path]);
            return;
        }
        if (sum > target) return;

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtrack(i, path, sum + candidates[i]); // reuse same element
            path.pop();
        }
    }

    backtrack(0, [], 0);
    return res;
};

//I use backtracking. At each step, I try all candidates starting from current index. I can reuse
//  the same element, so I don’t move to the next index. If sum exceeds target, I stop.

//Time: O(2^target) (exponential, worst case)
//Space: O(target) (recursion stack)