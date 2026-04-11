/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = (strs) => {
    if (!strs || strs.length === 0) return "";
    
    let prefix = strs[0] || "";
    
    for (let i = 1; i < strs.length; i++) {
        let current = strs[i] || "";
        while (current.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return "";
        }
    }
    
    return prefix;
}

// Examples:
console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));    // ""
console.log(longestCommonPrefix([]));                          // ""

//Time complexity: compares up to all charactes of all strings: O(n^*m)
//Space complexity: Only a few variables no extra arrays: O(1)