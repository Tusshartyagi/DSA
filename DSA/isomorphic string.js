/**
 * https://leetcode.com/problems/isomorphic-strings/
 * Isomorphic Strings
 */
var isIsomorphic = function(s, t) {
    if(s.length != t.length) return false;
        const shashMap = {};
        const thashMap = {};
        for(let i=0;i<s.length;i++){
            let stype = s[i];
            let ttype = t[i];
            if(!shashMap[stype]) shashMap[stype] = ttype;
            if(!thashMap[ttype]) thashMap[ttype] = stype;
            if(shashMap[stype]!==ttype || thashMap[ttype]!==stype) return false;
        }
    return true;
};