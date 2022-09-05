#include <iostream>
using namespace std;
int main(){
  int n;
  cin >>n;
  int row=1;
  int count =1;
  while(row<=n){
      int column=1;
    while(column<=row){
      cout<<count<<" ";
      count+=1;
      column+=1;
    }
    cout<<endl;
    row++;
    
  }
  return 0;
}