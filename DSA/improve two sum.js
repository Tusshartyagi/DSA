var findSum = function(num, target) {
  var hashMap = {};
    for(var i=0; i<num.length;i++){
      var neededValue = target - num[i];
      if(neededValue in hashMap){
        return [hashMap[neededValue], i];
      }
      else{
        hashMap[num[i]] =i;
      }
    }return [];
};
console.log(findSum([1,3,5,6,9],9));