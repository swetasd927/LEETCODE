//https://leetcode.com/problems/climbing-stairs/description/?envType=problem-list-v2&envId=rab78cw1
//math, dp, memoization


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
     if (n <= 2) return n;

    let prev1 = 2; // ways to reach step 2
    let prev2 = 1; // ways to reach step 1

    for (let i = 3; i <= n; i++) {
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};
//Number of ways follows Fibonacci: each step depends on previous two steps.
//tc:O(n), sc:O(1): optimized no array is used