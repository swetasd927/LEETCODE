//https://leetcode.com/problems/word-pattern/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false;

    const pToW = new Map();
    const wToP = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const p = pattern[i], w = words[i];

        if (pToW.has(p) && pToW.get(p) !== w) return false;
        if (wToP.has(w) && wToP.get(w) !== p) return false;

        pToW.set(p, w);
        wToP.set(w, p);
    }

    return true;
};
//Match pattern by comparing last seen indices of characters and words to enforce bijection.

//Time: O(n)
//Space: O(n)
