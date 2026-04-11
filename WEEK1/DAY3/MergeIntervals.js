//sorting and array: medium
//sort intervals by start time, compare current intervals with previous
//if overlaps then merge else push new intervals
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = (intervals) => {
    intervals.sort((a,b) => a[0] -b[0]);//sorted intervals
    let result = [intervals[0]]; //start with first intervals

    for(let i =1; i<intervals.length; i++){
        let last = result[result.length -1];
        let curr = intervals[i];
        if(curr[0] <= last[1]) {
            //current <= last end then overlapping
            //overlap then merge
            last[1] = Math.max(last[1], curr[1]);
            
        } else {
            //no overlap
            result.push(curr);
        }
            
    }
    return result;
};
//Time complexity: O(n log n) : due to sorting
//Space complexity: O(n) : for result array

//note: if [1,3] and [2,6] : becomes [1,6] 
//reason: second intervals starts inside the first one so they share common space 2 and 3
//two intervals overlap if start of second <= end of first