#include <iostream>
using namespace std;
int main(){
  int n=5;
//  cin >>n;
  int row=1;
  while(row<=n){
      int column=1;
    int count = 1;
    while(count<=n-row){
          cout<<" ";
        count++;
        }
    while(column<=row){
        cout<<column;
          column++;
      }
    column = row-1;
    while(column>=1){
        cout<<column;
          column--;
      }
    
    row++;
    cout<<endl;
  }
  return 0;
}