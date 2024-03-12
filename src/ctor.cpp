#include<iostream>
using namespace std;

class A{
    private:
        int x;

    public:
        A(int _val) : x(_val) {};

        void print() {
            cout << x << endl;
        }
};

class B{
    public:
        void print(A &a){ 
            a.print();
        }
};

int main(){
    A a(5);
    B b;
    b.print(a);
}