/**
 * https://leetcode.com/problems/merge-sorted-array/
 * Merge Sorted Array
 */
var merge = function(nums1, m, nums2, n) {
    nums1.length = m;
    for(let i=0;i<n;i++){
        nums1.push(nums2[i])
    }
    nums1.sort(function(a,b){
        return a-b;
    })
    return nums1;
};