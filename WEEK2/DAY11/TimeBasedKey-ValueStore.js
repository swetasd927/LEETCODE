//https://leetcode.com/problems/time-based-key-value-store/description/?envType=problem-list-v2&envId=rab78cw1
//Staff, Hash Table, String, Binary Search, Design

var TimeMap = function() {
    this.map = new Map();
};

TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map.has(key)) {
        this.map.set(key, []);
    }
    this.map.get(key).push([timestamp, value]);
};

TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map.has(key)) return "";

    let arr = this.map.get(key);

    let left = 0, right = arr.length - 1;
    let res = "";

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid][0] <= timestamp) {
            res = arr[mid][1];
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return res;
};


//I store values in a Map where each key maps to a list of (timestamp, value). 
// Since timestamps are increasing, I use binary search during get() to find 
// the latest value with timestamp less than or equal to the target.

//Set is O(1) since we append to a map list, and get is O(log n) due to binary search on timestamps. 
// Space complexity is O(n) for storing all values