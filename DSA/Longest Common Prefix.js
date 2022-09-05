/**
 * https://leetcode.com/problems/longest-common-prefix/
 * . Longest Common Prefix
 */
var longestCommonPrefix = function(strs) {
    if(strs==null || strs.length==0){
            return "";
        }
        
       
        commonPrefix = strs[0];
        
        for(var i=1; i< strs.length; i++){
            while(strs[i].indexOf(commonPrefix)!=0){
                commonPrefix = commonPrefix.substring(0, commonPrefix.length-1);
            }
        }
        return commonPrefix;
        
};