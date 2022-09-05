#include <iostream>
using namespace std;
int main(){
  int n;
  cin >>n;
  int row=1;
  while(row<=n){
      int space=1;
    while(space<=n-row){
        cout<<" ";
      space++;
    }
    int column = 1;
    while(column<=row){
        cout<<"*";
      column++;
    }
    row++;
    cout<<endl;
    
  }
  return 0;
}
