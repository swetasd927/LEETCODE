var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

/**
indexOf searches for the first occurrence of needle in haystack
Returns:
    Index if found
    -1 if not found
 */

/**
Time: O(n * m) → n = haystack length, m = needle length
Space: O(1) → no extra memory used
 */


/**
 * Look at index 0 of haystack → "s a d"
Matches "sad" 
First occurrence found at index 0 → return 0.
Even though "sad" also appears at index 6, the problem only cares about the first occurrence.
 */