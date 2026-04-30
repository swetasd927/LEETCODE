//https://leetcode.com/problems/defanging-an-ip-address/?envType=problem-list-v2&envId=string

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.split(".").join("[.]");
};

//Replace every "." with "[.]" using split and join.
//Time Complexity: O(n)
//Space Complexity: O(n)