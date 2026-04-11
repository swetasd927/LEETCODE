//https://leetcode.com/problems/add-binary/description/?envType=problem-list-v2&envId=rab78cw1
//Math, String, Bit Manipulation, Simulation

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = (a, b) => {
    let i = a.length -1;
    let j = b.length -1;
    let carry = 0;
    let result = "";

    while(i >= 0 || j>= 0 || carry) {
        let sum = carry;

        if(i >= 0) sum += Number(a[i--]);
        if(j >= 0) sum += Number(b[j--]);

        result = (sum % 2) + result;
        carry = Math.floor(sum/2);
    }
    return result;
};

//simulating binary addition from left to right while maintaining the array

//tc: O(n), sc: O(n)