//https://leetcode.com/problems/find-the-town-judge/submissions/1996797497/?envType=problem-list-v2&envId=hash-table

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
     let score = new Array(n + 1).fill(0);

    for (let [a, b] of trust) {
        score[a]--; // trusts someone
        score[b]++; // trusted by someone
    }

    for (let i = 1; i <= n; i++) {
        if (score[i] === n - 1) return i;
    }

    return -1;
};