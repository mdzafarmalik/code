#include<iostream>
#include<vector>
using namespace std;
int main(){
 vector<char>vec={'a','b','c','d'};
 cout<<"size="<<vec.size()<<endl;
 vec.push_back('e');
 vec.push_back('f');
 vec.push_back('g');

  cout<<"size="<<vec.size()<<endl;
  vec.pop_back();
   cout<<"size="<<vec.size()<<endl;

   cout<<"first = "<< vec.front()<<endl;
for(char i:vec){

    cout<<i<<endl;
 }

    return 0;
}