var a = [54 ,55, 51, 52, 53];
let largest = second = 0;
function fun(a){
  for (var i = 0;i<a.length;i++){
    if (a[i]>largest){
      largest = a[i];
    }
  }
  for(var i=0; i<=a.length;i++){
    if(a[i] >= second && a[i]<largest){
      second = a[i]
    }
  }
  console.log(second);
}
fun(a);