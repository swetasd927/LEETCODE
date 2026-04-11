/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = (s) => {
    const n = s.length;
    for(let len =1; len <= Math.floor(n/2); len++){
        if(n%len ===0){
            const sub = s.slice(0, len);
            const repeatCount = n/len;
            if(sub.repeat(repeatCount) === s){
                return true;
            }
        }
    }
    return false;
};

//Time complexity: O(n^2) : in worst case[slicing + repeating strings]
//Space complexity: O(n) : for repeated string