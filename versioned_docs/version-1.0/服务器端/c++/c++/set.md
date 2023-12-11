> set有一个很重要的特性，那就是自动升序排序

```c++
#include <iostream>
#include <cstdio>
#include <set>
using namespace std;

// 定义set:
1.set<int> s;
2.还可以把一个数组放进去：set<int> s(arr.begin(),arr.end());

定义迭代器：set<int>::iterator ite;

// set方法：
1.insert()   向set容器中插入元素
2.erase()   按元素值删除元素
3.begin()   容器中第一个元素的索引，*(s.begin())为该元素的值
4.end()   指向容器中最后一个元素的下一位
5.rbegin()   容器中最后一个元素的索引
6.rend()   容器中第一个元素的索引
7.size()   set容器的大小
8.find()   返回一个指向被查找到元素的迭代器
9.count()   返回某个元素出现的个数
10.empty()   容器是否为空，空为true
11.clear()   清空容器

```
## 遍历
```c++
#include<iostream>
#include<set>
using namespace std;
int main(){
	set<int> s;//定义 
	s.insert(1);//插入元素1 
	s.insert(3);//插入元素3
	s.insert(2);//插入元素2

    for(auto it:s){
		cout<<it<<' ';
	} 

	// set<int>::iterator it;//使用迭代器
	// for(it=s.begin();it!=s.end();it++){
	// 	cout<<*it<<' ';
	// } 
} 

// 降序
#include<iostream>
#include<set>
using namespace std;
int main(){
	set<int> s;//定义 
	s.insert(1);//插入元素1 
	s.insert(3);//插入元素3
	s.insert(2);//插入元素2

	set<int>::iterator it;//使用迭代器
	for(it=--s.end();it!=--s.begin();it--){
		cout<<*it<<' ';
	} 

    // set<int>::reverse_iterator it;//使用反向迭代器
	// for(it=s.rbegin();it!=s.rend();it++){
	// 	cout<<*it<<' ';
	// } 
} 

```