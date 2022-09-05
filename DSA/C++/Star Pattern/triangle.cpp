#include <iostream>
using namespace std;
int main(){
  int n;
  cin >>n;
  int row=1;
  while(row<=n){
      int column=1;
    while(column<=n){
      if(row+column>n){
        cout<<"* ";
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