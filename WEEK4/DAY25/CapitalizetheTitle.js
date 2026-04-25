//https://leetcode.com/problems/capitalize-the-title/description/?envType=problem-list-v2&envId=string


/**
 * @param {string} title
 * @return {string}
 */

var capitalizeTitle = function(title) {
    return title
        .split(" ")
        .map(word => {
            word = word.toLowerCase();
            return word.length <= 2
                ? word
                : word[0].toUpperCase() + word.slice(1);
        })
        .join(" ");
};

//Convert each word to lowercase first, then capitalize only the first letter if 
// its length is greater than 2.

//Time: O(n) traverse each character once
//Space: O(n) for split/map/join result