//https://leetcode.com/problems/evaluate-reverse-polish-notation/?envType=problem-list-v2&envId=rab78cw1


/**
 * @param {string[]} tokens
 * @return {number}
 */

function evalRPN(tokens) {
    let stack = [];

    for (let t of tokens) {

        if (t === "+" || t === "-" || t === "*" || t === "/") {
            let b = stack.pop();
            let a = stack.pop();

            let res;

            if (t === "+") res = a + b;
            else if (t === "-") res = a - b;
            else if (t === "*") res = a * b;
            else if (t === "/") {
                res = Math.trunc(a / b); // truncate toward 0
            }

            stack.push(res);
        } else {
            stack.push(Number(t));
        }
    }

    return stack[0];
}

//I used a stack to evaluate the postfix expression. Whenever I encounter a number, 
// I push it to the stack. When I encounter an operator, I pop two elements, apply 
// the operation, and push the result back. At the end, the stack contains the final result.”

//Time: O(n)  each token processed once, Space: O(n)  stack usage