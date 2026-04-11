/**
 * Given an integer n, return a counter function. This counter function 
 * initially returns n and then returns 1 more than the previous value 
 * every subsequent time it is called (n, n + 1, n + 2, etc).
 */

var createCounter = function(n) {
    return function() {
        return n++; 
    };
};
const counter =createCounter(3)

//Time Complexity: Each call to counter just returning a value and incrementing : O(1)
//Space Complexity: Closure keeps one variable n in memory : O(1).