//https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/?envType=problem-list-v2&envId=greedy

/**
 * @param {string} time
 * @return {string}
 */

var maximumTime = function(time) {
    let arr = time.split("");

    // first hour digit
    if (arr[0] === "?") {
        arr[0] = (arr[1] === "?" || arr[1] <= "3") ? "2" : "1";
    }

    // second hour digit
    if (arr[1] === "?") {
        arr[1] = (arr[0] === "2") ? "3" : "9";
    }

    // first minute digit
    if (arr[3] === "?") {
        arr[3] = "5";
    }

    // second minute digit
    if (arr[4] === "?") {
        arr[4] = "9";
    }

    return arr.join("");
};

//I used a greedy approach by replacing each ‘?’ with the maximum 
//possible valid digit while maintaining valid 24-hour time constraints. 
//Since the string length is fixed, time and space complexity are O(1).