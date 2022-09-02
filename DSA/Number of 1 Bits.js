/**
 * https://leetcode.com/problems/number-of-1-bits/
 * Number of 1 Bits
 */
var hammingWeight = function(n) {
    n = n.toString(2)
    let res = 0
    
    for(let i=0; i<n.length; i++){
        if(n[i] == 1){
          res += 1  
        } 
    }
    
    return res
};