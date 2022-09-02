/**
 * https://leetcode.com/problems/maximum-subarray/
 * Maximum Subarray
 */
var maxSubArray = function(nums) {
    var sum =nums[0];
    var max_so_far=nums[0];
    for(var i=1;i<nums.length;i++){
        	sum = Math.max(nums[i], sum+nums[i]);
		    max_so_far = Math.max(max_so_far, sum);
    }
    return max_so_far;
};