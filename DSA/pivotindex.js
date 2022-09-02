//Find Pivot Index
var pivotIndex = function(nums) {
    let sum =0
    let result = 0;
    for(let i=0;i<nums.length;i++){
        sum +=nums[i];
    }
    for(let i=0;i<nums.length;i++){
        if(i===0){
            sum -= nums[i];
        }else{
            result+= nums[i-1];
            sum-= nums[i];
        }
        if(sum===result){
            return i;
        }
    }
  return -1;
};