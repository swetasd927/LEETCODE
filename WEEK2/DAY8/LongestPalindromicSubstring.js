//https://leetcode.com/problems/longest-palindromic-substring/?envType=problem-list-v2&envId=rab78cw1

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

//I use expand around center. For each index, I treat it as the center
//  and expand outward for both odd and even length palindromes, 
// keeping track of the longest substring.

//Time: O(n²) (expand for each index)
//Space: O(1) (no extra space used)