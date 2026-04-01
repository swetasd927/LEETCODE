var once = function(fn) {
    let called = false; // Tracks if the function was already called
    let result;         // Stores the result of the first call
    
    return function(...args) { // Use rest parameters to accept any arguments
        if (!called) {
            called = true; // Mark as called
            result = fn(...args); // Call the function and save the result
            return result;
        }
        return undefined; // Return undefined on subsequent calls
    };
};

//Time complexity: Each call is just a single function call and check: O(1)
//Space complexity: Keeps two variable in closure(call and result) : O(1)