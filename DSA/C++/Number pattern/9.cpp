#include <iostream>
using namespace std;
int main(){
  int n;
  cin >>n;
  int count=1;
  int row=1;
  while(row<=n){
      int column=1;
    while(column<=n){
      if(row+column>n){
        cout<<count;
        count++;
      }else{
        cout<<" ";
      }
      column++;
    }
    row++;
    cout<<endl;
  }
  return 0;
}