//https://leetcode.com/problems/decode-the-message/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */

var decodeMessage = function(key, message) {
    let map = {};
    let ch = "a".charCodeAt(0);

    for (let c of key) {
        if (c !== " " && !map[c]) {
            map[c] = String.fromCharCode(ch);
            ch++;
        }
    }

    let result = "";

    for (let c of message) {
        result += (c === " ") ? " " : map[c];
    }

    return result;
};

//Build a substitution map using the first occurrence of each key character 
// mapped to a–z, then decode the message using that map.

//Time: O(n + m)  traverse key and message once
//Space: O(1)  max 26 mappings only