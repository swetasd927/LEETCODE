//https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/?envType=problem-list-v2&envId=rab78cw1

//Start with empty string "", Pick letters of first digit For each letter, move to next digit
//Continue until full length reached


/**
 * @param {string} digits
 * @return {string[]}
 */

function letterCombinations(digits) {
    if (!digits.length) return [];

    const map = {
        2: "abc", 3: "def", 4: "ghi",
        5: "jkl", 6: "mno",
        7: "pqrs", 8: "tuv", 9: "wxyz"
    };

    let res = [];

    function backtrack(i, curr) {
        if (i === digits.length) {
            res.push(curr);
            return;
        }

        let letters = map[digits[i]];

        for (let ch of letters) {
            backtrack(i + 1, curr + ch);
        }
    }

    backtrack(0, "");
    return res;
}

//“This is a backtracking problem where we generate all possible combinations. For each digit,
//  we try all its mapped letters and recursively build the string. 
// Once the string length equals the input length, we add it to the result.

//Time: O(4^n) (each digit → up to 4 letters)
//Space: O(n) recursion stack