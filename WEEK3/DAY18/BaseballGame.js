//https://leetcode.com/problems/baseball-game/description/?envType=problem-list-v2&envId=array
//Mid level, Array, Stack, Simulation


//game rule:
//Number (x)  push it
//"+" : push sum of last two scores
//"D" : push double of last score
//"C" : remove last score (pop)

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(ops) {
    let stack = [];
    for(let op of ops) {
        if(op === '+'){
            let last = stack[stack.length -1];
            let secLast = stack[stack.length -2];
            stack.push(last + secLast);
        } else if (op === 'D') {
            stack.push(2 * stack[stack.length -1]);    
        } else if (op ==='C') {
            stack.pop();
        }else{
            stack.push(Number(op));
        }
    }
    //sum all values
    return stack.reduce((sum, val) => sum + val, 0);
};

//to optimise it

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(ops) {
    let stack = [];
    let sum = 0;
    for(let op of ops) {
        if(op === '+'){
            let val = stack[stack.length -1] + stack[stack.length -2];
            stack.push(val);
            sum += val;
        } else if (op === 'D') {
            let val =2 * stack[stack.length -1];    
            stack.push(val);
            sum += val;
        } else if (op ==='C') {
            sum -= stack.pop();
        }else{
            let val =(Number(op));
            stack.push(val);
            sum += val;
        }
    }
    //sum all values
    return sum;
};

/**
 * I’ll use a stack to simulate the score record. 
 * Each operation modifies the stack:

If it’s a number then  push it
‘+’ push sum of last two elements
‘D’ push double of last element
‘C’ pop the last element

Additionally, instead of calculating the sum at the end, 
I maintain a running total while processing each operation. 
This avoids an extra pass over the data.
 */

/**
 * By maintaining a running sum, I eliminate the need for a second traversal to 
 * compute the total, reducing constant overhead while keeping the same O(n) complexity.
 * Time and Space: O(n)
 */