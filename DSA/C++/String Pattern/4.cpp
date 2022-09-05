#include <iostream>
using namespace std;
int main(){
  int n;
  cin >>n;
  int row=1;
  while(row<=n){
      int column=1;
      char ch = 'A' + row-1;
    while(column<=n){
      cout<<ch<<" ";
      ch = ch+1;
      column+=1;
    }
    row++;
    cout<<endl;
    
  }
  return 0;
}