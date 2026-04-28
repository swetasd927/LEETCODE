//https://leetcode.com/problems/uncommon-words-from-two-sentences/?envType=problem-list-v2&envId=string

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let map = {};

     for (let word of (s1 + " " + s2).split(" ")) {
        map[word] = (map[word] || 0) + 1;
    }
    return Object.keys(map).filter(word => map[word] === 1);
};

//Count frequency of all words from both sentences and return the ones appearing exactly once.
//Time Complexity: O(n + m)
//Space Complexity: O(n + m)