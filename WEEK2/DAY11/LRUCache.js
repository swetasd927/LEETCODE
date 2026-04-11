//https://leetcode.com/problems/lru-cache/?envType=problem-list-v2&envId=rab78cw1
//Hash Table, Linked List, Design, Doubly Linked List


var LRUCache = function(capacity) {
    this.cap = capacity;
    this.map = new Map();
};

LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1;

    let val = this.map.get(key);

    this.map.delete(key);
    this.map.set(key, val);

    return val;
};

LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        this.map.delete(key);
    }

    this.map.set(key, value);

    if (this.map.size > this.cap) {
        let lruKey = this.map.keys().next().value;
        this.map.delete(lruKey);
    }
};


//I used JavaScript Map since it maintains insertion order. I move accessed elements to the end 
// to mark them as recently used, and remove the first key when capacity is exceeded.


//Time Complexity:get() : O(1) ,put() : O(1) average
// Space Complexity:O(capacity)

//Both get and put operate in O(1) average 
// time using a Map that maintains insertion order, and space complexity is O(capacity).