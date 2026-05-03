//https://leetcode.com/problems/design-hashmap/description/?envType=problem-list-v2&envId=array
//ARray, Hash table, linked list, design, hash function

var MyHashMap = function() {
    this.size = 1000;
    this.buckets = new Array(this.size);

    for (let i = 0; i < this.size; i++) {
        this.buckets[i] = [];
    }
};

MyHashMap.prototype.hash = function(key) {
    return key % this.size;
};

MyHashMap.prototype.put = function(key, value) {
    let index = this.hash(key);
    let bucket = this.buckets[index];

    for (let pair of bucket) {
        if (pair[0] === key) {
            pair[1] = value; // update existing
            return;
        }
    }

    bucket.push([key, value]); // insert new
};

MyHashMap.prototype.get = function(key) {
    let index = this.hash(key);
    let bucket = this.buckets[index];

    for (let pair of bucket) {
        if (pair[0] === key) {
            return pair[1];
        }
    }

    return -1;
};

MyHashMap.prototype.remove = function(key) {
    let index = this.hash(key);
    let bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
            bucket.splice(i, 1);
            return;
        }
    }
};

/**
 *I implement a HashMap using an array of fixed-size buckets. Each bucket is an array that stores 
 key-value pairs to handle collisions using chaining. The hash function maps a key to an index using 
 modulo operation. For put, I update if key exists otherwise insert. For get and remove, I traverse 
 the bucket.
 */

//Time: 
// Average: O(1) for put, get, remove 
// Worst: O(n) if many collisions

//Space: O(n) stores all key-value pairs
// All operations are O(1) on average using hashing with chaining, but can degrade to 
// O(n) in worst case due to collisions. Space complexity is O(n).