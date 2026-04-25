//https://leetcode.com/problems/slowest-key/?envType=problem-list-v2&envId=string

/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */

var slowestKey = function(releaseTimes, keysPressed) {
    let maxTime = releaseTimes[0], ans = keysPressed[0];

    for (let i = 1; i < releaseTimes.length; i++) {
        let duration = releaseTimes[i] - releaseTimes[i - 1];

        if (duration > maxTime || (duration === maxTime && keysPressed[i] > ans)) {
            maxTime = duration;
            ans = keysPressed[i];
        }
    }

    return ans;
};

//Track the longest keypress duration while iterating; if durations tie, choose 
// the lexicographically larger character.

//Time: O(n) traverse the array once
//O(1) only variables used