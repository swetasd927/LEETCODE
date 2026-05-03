//https://leetcode.com/problems/unique-email-addresses/description/?envType=problem-list-v2&envId=array
//Senior Array Hash Table String

/**
 * @param {string[]} emails
 * @return {number}
 */

var numUniqueEmails = function(emails) {
    let set = new Set();
    
    for (let email of emails) {
        let [local, domain] = email.split("@");
        
        local = local.split("+")[0].replace(/\./g, "");
        
        set.add(local + "@" + domain);
    }
    
    return set.size;
};

//Time: O(n * k)
//Space: O(n)
//For each email, we normalize the local part by removing dots and ignoring everything after '+', 
// then store unique results in a Set and return its size.