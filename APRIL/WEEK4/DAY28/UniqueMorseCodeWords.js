//https://leetcode.com/problems/unique-morse-code-words/description/?envType=problem-list-v2&envId=string

var uniqueMorseRepresentations = function(words) {
    const morse = [
        ".-","-...","-.-.","-..",".","..-.","--.","....","..",
        ".---","-.-",".-..","--","-.","---",".--.","--.-",".-.",
        "...","-","..-","...-",".--","-..-","-.--","--.."
    ];

    return new Set(
        words.map(word =>
            [...word]
                .map(ch => morse[ch.charCodeAt(0) - 97])
                .join("")
        )
    ).size;
};

//Map each word to its Morse code string and use a Set to count unique transformations.
//Time Complexity: O(n × m)
//Space Complexity: O(n)