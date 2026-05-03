//https://leetcode.com/problems/occurrences-after-bigram/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    let words = text.split(" ");
    let result = [];

    for (let i = 0; i < words.length - 2; i++) {
        if (words[i] === first && words[i + 1] === second) {
            result.push(words[i + 2]);
        }
    }

    return result;
};

//Split the sentence into words and check every 3-word window for the pattern first second third.
//Time Complexity: O(n)
//Space Complexity: O(n)