//https://leetcode.com/problems/keyboard-row/description/?envType=problem-list-v2&envId=array

/**
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function(words) {
    const row1 = new Set("qwertyuiop");
    const row2 = new Set("asdfghjkl");
    const row3 = new Set("zxcvbnm");

    let result = [];

    for (let word of words) {
        let lower = word.toLowerCase();

        if ([...lower].every(ch => row1.has(ch)) ||
            [...lower].every(ch => row2.has(ch)) ||
            [...lower].every(ch => row3.has(ch))) {
            result.push(word);
        }
    }

    return result;
};


//I model each keyboard row as a set. Then for each word, I check if all characters belong to one row 
// using every(). If yes, I include it in the result. This gives linear time complexity relative to total 
// characters.

//Time: O(n * m) (n = number of words, m = length of each word)
//Space: O(1) (only 3 fixed sets)
