//https://leetcode.com/problems/student-attendance-record-i/?envType=problem-list-v2&envId=string

/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absents = 0;
    let lateStreak = 0;

    for (let ch of s) {
        if (ch === 'A') {
            absents++;
            if (absents >= 2) return false;
            lateStreak = 0;
        } 
        else if (ch === 'L') {
            lateStreak++;
            if (lateStreak >= 3) return false;
        } 
        else {
            // Present resets late streak
            lateStreak = 0;
        }
    }

    return true;
};

//Count total absences and track consecutive lates; return false if absences reach 2 or late streak reaches 3.

//Time Complexity: O(n)
//Space Complexity: O(1)