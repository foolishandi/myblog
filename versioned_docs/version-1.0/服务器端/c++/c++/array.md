```c++
begin()，end() ,cbegin()，cend()	提供正向迭代器支持

rbegin()，rend()，crbegin()，crend()	提供反向迭代器支持

size()	返回数组大小

max_size()	返回数组最大大小（由于array为固定序列，该函数返回值与size()相同）

empty()	判断数组是否为空 (几乎没用)

at()，operator[]	获取数组元素

front()	返回数组第一个元素的引用

back()	返回数组最后一个元素的引用

data()	返回指向数组对象包含的数据的指针

fill()	用值填充数组

swap()	交换两个数组元素

get(array)	返回某一个数组元素的引用
```
```c++
#include<iostream>
#include<array>
using namespace std;

int main()
{   
    std::array<int,11> arr{1,2,3,4,5,6,7,8,9};
    arr.at(9) = arr.at(3) + arr.at(5);
    arr[10] = arr[1] + arr[8];

    // arr.front() = 666;
    // arr.back() = 666;

    // 返回指向数组对象中第一个元素的指针
    // cout<< *arr.data()<<endl;

    // std::array<int,10> var{0,0,0,0,0,0,0,0,0,1};
    // arr.swap(var); //交换两个array的值。注：这两个数组的大小，数据类型必须相同！

    cout<<arr.at(9)<<endl;
    cout<<arr[10]<<endl;

    //arr[11] = 6;越界访问，程序异常，但Qt Creator并未报错
    arr.at(11) = 6; //异常
    return 0;
}

// 10
// 11

// terminate called after throwing an instance of ‘std::out_of_range’
// what(): array::at: __n (which is 11) >= _Nm (which is 11)
```