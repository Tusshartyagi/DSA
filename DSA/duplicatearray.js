var duplicate = function (nums) {
  const hashMap = {};
  var count =1;
  for(var i =0; i<nums.length;i++){
    if(!hashMap[nums[i]]){
      hashMap[nums[i]] = count;
    }else{
      hashMap[nums[i]] = count+1;
    }
  }
  for(var el in hashMap){
    if(hashMap[el]==2){
      return el;
    }
  }
}
console.log(duplicate([2,5,7,3,5,8]))