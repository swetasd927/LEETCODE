//Check whether a number is palindrome number or not
var isPalindrome = (x) => {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    let rev = 0;

   
    while (x > rev) { 
        rev = rev * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return x === rev || x === Math.floor(rev / 10);
};

/**
 * Time Complexity:
 * Each iteration of the while loop removes one digit from x 
 * (by x = Math.floor(x / 10)) and adds one digit to rev.
For a number with n digits, the loop runs about n/2 times
 (since we only reverse half the number).
Time complexity: O(log₁₀(x)), because the number of digits
 in x is log₁₀(x).

 Space Complexity
We are only using a few integer variables (rev and modifying x) and
 no extra data structures.
Space complexity: O(1) (constant space).

This is efficient because we don’t convert the number to a string or 
use extra arrays.
 */