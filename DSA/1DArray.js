//Running Sum of 1d Array
var runningSum = function(nums) {
    var arr = [];
    var sum =0;
    for(var i =0; i<nums.length;i++){
        sum = sum+nums[i];
        arr[i]=sum;
    }
    return arr;
};