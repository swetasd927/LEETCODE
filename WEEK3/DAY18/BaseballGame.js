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