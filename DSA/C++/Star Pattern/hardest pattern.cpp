#include <iostream>
using namespace std;
int main(){
  int n=5;
//  cin >>n;
  int row=1;
  while(row<=n){
      int column=1;
    while(column<=n){
      if(row+column>n+1){
        cout<<"*";
      }
      else{
        cout<<column;
      }
      column++;
    }
    int m = n*2;
    while(column<=m){
      if(row+n<=column){
        cout<<m-column+1;
      }
      else{
        cout<<"*";
      }
      column++;
    }
    
    row++;
    cout<<endl;
  }
  return 0;
}