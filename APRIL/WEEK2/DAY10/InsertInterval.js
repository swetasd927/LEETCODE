//https://leetcode.com/problems/insert-interval/?envType=problem-list-v2&envId=rab78cw1

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

var insert = function(intervals, newInterval) {
    let res = [], i = 0, n = intervals.length;

    // 1. left side (no overlap)
    while (i < n && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i++]);
    }

    // 2. merge overlapping
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    res.push(newInterval);

    // 3. right side
    while (i < n) res.push(intervals[i++]);

    return res;
};


//Add all intervals that end before newInterval
//Merge overlapping intervals
//Add remaining intervals

//Time: O(n) (single pass), Space: O(n) (result array)