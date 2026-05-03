//https://leetcode.com/problems/number-of-lines-to-write-string/description/?envType=problem-list-v2&envId=array
//Senior Array String

/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */

var numberOfLines = function(widths, s) {
    let lines = 1;
    let width = 0;
    
    for (let ch of s) {
        let w = widths[ch.charCodeAt(0) - 97];
        
        if (width + w > 100) {
            lines++;
            width = w;
        } else {
            width += w;
        }
    }
    
    return [lines, width];
};

//Simulate filling each line up to 100 pixels, start a new line when exceeded.
//Time: O(n)
//Space: O(1)


