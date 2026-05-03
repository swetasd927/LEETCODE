//https://leetcode.com/problems/implement-trie-prefix-tree/description/?envType=problem-list-v2&envId=rab78cw1
//Hash Table, String, Design, Trie

//Each node has:
// children  map of next characters
//isEnd  marks end of a complete word

var Trie = function() {
    this.root = {};
};

Trie.prototype.insert = function(word) {
    let node = this.root;

    for (let ch of word) {
        if (!node[ch]) {
            node[ch] = {};
        }
        node = node[ch];
    }

    node.isEnd = true;
};

Trie.prototype.search = function(word) {
    let node = this.root;

    for (let ch of word) {
        if (!node[ch]) return false;
        node = node[ch];
    }

    return node.isEnd === true;
};

Trie.prototype.startsWith = function(prefix) {
    let node = this.root;

    for (let ch of prefix) {
        if (!node[ch]) return false;
        node = node[ch];
    }

    return true;
};

/**
 * I use a Trie (prefix tree) where each node represents a character. 
 * Insert builds the path character by character and marks the end of
 *  a word. Search checks if the full word exists with an end marker,
 *  while startsWith only checks if the prefix path exists. All operations 
 * run in O(L) time where L is the word length.
 */

//Time: O(L) per operation
// Space: O(N × L) total characters stored in the Trie (all words combined)