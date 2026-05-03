//https://leetcode.com/problems/goat-latin/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);

    return sentence
        .split(" ")
        .map((word, i) => {
            if (!vowels.has(word[0])) {
                word = word.slice(1) + word[0];
            }

            return word + "ma" + "a".repeat(i + 1);
        })
        .join(" ");
};

//Split words, apply Goat Latin rules based on first letter, then append "ma" and increasing "a" count by position.
//Time Complexity: O(n)
//Space Complexity: O(n)