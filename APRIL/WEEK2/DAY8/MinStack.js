//https://leetcode.com/problems/min-stack/description/?envType=problem-list-v2&envId=rab78cw1


/**
 * @param {string} s
 * @return {string}
 */

function longestPalindrome(s) {
    let res = "";

    const expand = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--; r++;
        }
        return s.slice(l + 1, r);
    };

    for (let i = 0; i < s.length; i++) {
        let odd = expand(i, i);
        let even = expand(i, i + 1);
        let longer = odd.length > even.length ? odd : even;
        if (longer.length > res.length) res = longer;
    }

    return res;
}

//I store pairs of [value, currentMin] in one stack, so each element knows the minimum up to that point.

/*
Time: O(1)[push, pop, top, getMin]
Space Complexity: O(n)
*/
