#include <iostream>
using namespace std;
int main(){
  int n;
  cin >>n;
  int row=1;
  while(row<=n){
      int column=row;
    while(column>=1){
      cout<<column<<" ";
      column-=1;
    }
    cout<<endl;
    row++;
    
  }
  return 0;
}