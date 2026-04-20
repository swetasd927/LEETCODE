//https://leetcode.com/problems/most-common-word/description/?envType=problem-list-v2&envId=array

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

var mostCommonWord = function(paragraph, banned) {
    let bannedSet = new Set(banned);
    
    let words = paragraph
        .toLowerCase()
        .replace(/[^a-z\s]/g, " ")
        .split(/\s+/);

    let count = {};
    let maxWord = "";
    let maxCount = 0;

    for (let word of words) {
        if (word && !bannedSet.has(word)) {
            count[word] = (count[word] || 0) + 1;

            if (count[word] > maxCount) {
                maxCount = count[word];
                maxWord = word;
            }
        }
    }

    return maxWord;
};

//I normalize the string by converting to lowercase and removing punctuation. Then I use a set 
// for banned words and a hashmap to count frequencies. While counting, I track the most frequent
// valid word.

//Time: O(n),Space: O(n)