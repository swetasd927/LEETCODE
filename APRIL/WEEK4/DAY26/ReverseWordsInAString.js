//https://leetcode.com/problems/reverse-words-in-a-string-iii/description/?envType=problem-list-v2&envId=string


/**
 * @param {string} s
 * @return {string}
 */


var reverseWords = function(s) {
    return s
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
};

//Split sentence into words, reverse each word individually, then 
// join them back while keeping the original word order.

//Time Complexity: O(n)
//Space Complexity:O(n)