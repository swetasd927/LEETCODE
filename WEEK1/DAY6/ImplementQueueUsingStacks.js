//https://leetcode.com/problems/implement-queue-using-stacks/description/?envType=problem-list-v2&envId=rab78cw1
//stack design queue

var MyQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

// Push element to back
MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
};

// Remove front element
MyQueue.prototype.pop = function() {
    if (this.outStack.length === 0) {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop());
        }
    }
    return this.outStack.pop();
};

// Get front element
MyQueue.prototype.peek = function() {
    if (this.outStack.length === 0) {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop());
        }
    }
    return this.outStack[this.outStack.length - 1];
};

// Check if empty
MyQueue.prototype.empty = function() {
    return this.inStack.length === 0 && this.outStack.length === 0;
};

//Use two stacks and reverse order only when needed to simulate FIFO.

//tc: O(1) per operation, sc: O(n)