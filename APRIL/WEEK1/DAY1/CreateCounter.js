/**
 * Write a function createCounter. It should accept an initial integer 
 * init. It should return an object with three functions.
The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 */

var createCounter = function(init) {
    let current = init; // Initialize the counter value with init

    return {
        increment: function() {
            current++; // Increase the current value
            return current;
        },
        decrement: function() {
            current--; // Decrease the current value
            return current;
        },
        reset: function() {
            current = init; // Reset the current value to the initial value
            return current; // Return the reset value
        }
    };
};

//Time complexity: Each function (increment, decrement, reset) does simple operations → O(1)
//Space complexity: Keeps one variable current and the initial value init in memory → O(1)