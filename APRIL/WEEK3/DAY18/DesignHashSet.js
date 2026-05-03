//https://leetcode.com/problems/design-hashset/submissions/1981410155/?envType=problem-list-v2&envId=array


var MyHashSet = function() {
    this.size = 1000;
    this.buckets = new Array(this.size);

    for (let i = 0; i < this.size; i++) {
        this.buckets[i] = [];
    }
};

MyHashSet.prototype.hash = function(key) {
    return key % this.size;
};

MyHashSet.prototype.add = function(key) {
    let index = this.hash(key);
    let bucket = this.buckets[index];

    for (let val of bucket) {
        if (val === key) return; // already exists
    }

    bucket.push(key);
};

MyHashSet.prototype.contains = function(key) {
    let index = this.hash(key);
    let bucket = this.buckets[index];

    for (let val of bucket) {
        if (val === key) return true;
    }

    return false;
};

MyHashSet.prototype.remove = function(key) {
    let index = this.hash(key);
    let bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] === key) {
            bucket.splice(i, 1);
            return;
        }
    }
};

/**
 * I implement a HashSet using an array of fixed-size buckets. Each bucket stores keys 
 * using chaining to handle collisions. A hash function maps keys to indices. Add inserts 
 * if not present, contains searches in the bucket, and remove deletes from the bucket.

Time (avg): O(1) for add, remove, contains
Time (worst): O(n)
Space: O(n)
 */