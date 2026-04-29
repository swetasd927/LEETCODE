//https://leetcode.com/problems/day-of-the-year/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let [year, month, day] = date.split("-").map(Number);

    let days = [31,28,31,30,31,30,31,31,30,31,30,31];

    // Check leap year
    if (
        (year % 4 === 0 && year % 100 !== 0) ||
        year % 400 === 0
    ) {
        days[1] = 29;
    }

    let total = day;

    for (let i = 0; i < month - 1; i++) {
        total += days[i];
    }

    return total;
};

//Parse year/month/day, adjust February for leap year, then sum previous months’ days plus current day.
//Time Complexity: O(1)
//Space Complexity: O(1)