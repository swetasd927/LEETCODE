//https://leetcode.com/problems/word-break/description/?envType=problem-list-v2&envId=rab78cw1
//String, Dynamic Programming, Hash Table, Array, Trie, Memoization

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict); // faster lookups
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true; // empty string

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.slice(j, i))) {
                dp[i] = true;
                break; // no need to check further
            }
        }
    }

    return dp[n];
};

//I use DP to track which prefixes of the string can be segmented using the dictionary.

/**
Time: O(n² * k) : n = s.length, k = max length of word in dict (because of slice)
Space: O(n + m) : n for dp array, m for wordSet
 */