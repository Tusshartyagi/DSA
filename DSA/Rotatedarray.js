//Brute force Method
//time complexity o(n) space complexity 0(k)
const rotateArray = function(array,k){
  const length = array.length;
  k=k%length;
  const temp = array.slice(length-k);
  for(let i=length-k-1;i>=0;i--){
    array[i+k]=array[i];
  }
  for(let i =0;i<k;i++){
    array[i]=temp[i];
  }
  return array;
}

array = [1,2,3,4];
console.log(rotateArray(array,6));