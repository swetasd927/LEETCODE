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

//The judge trusts nobody and is trusted by everyone else, 
// so I’ll track in-degree and out-degree. The judge will 
//have in-degree = n-1 and out-degree = 0.

//Time: O(n + trust.length)
//Space: O(n)