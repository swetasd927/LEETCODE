//https://leetcode.com/problems/isomorphic-strings/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function(s, t) {
    let mapST = {}, mapTS = {};
    for (let i = 0; i < s.length; i++) {
        if ((mapST[s[i]] && mapST[s[i]] !== t[i]) || 
            (mapTS[t[i]] && mapTS[t[i]] !== s[i])) return false;
        mapST[s[i]] = t[i];
        mapTS[t[i]] = s[i];
    }
    return true;
};

//Check isomorphism by maintaining two maps (s -> t and t ->s) to ensure a consistent 
// one-to-one character mapping.
//Time: O(n)
//Space: O(1) (since ASCII chars are bounded)