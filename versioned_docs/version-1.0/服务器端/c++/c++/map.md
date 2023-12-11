>C++ maps是一种关联式容器，包含“关键字/值”对

>map的键和值是唯一的，如果需要一个键对应多个值，就只能用multimap。另外，C++11标准新增了unordered_map，以散列代替map内部的红黑树实现，使其可以用来处理只映射而不按key排序的需求，速度比map要快得多

>map会以键从小到大的顺序自动排序

```c++


 begin()         返回指向map头部的迭代器

 clear(）        删除所有元素

 count()         返回指定元素出现的次数, (帮助评论区理解： 因为key值不会重复，所以只能是1 or 0)

 empty()         如果map为空则返回true

 end()           返回指向map末尾的迭代器

 equal_range()   返回特殊条目的迭代器对

 erase()         删除一个元素

 find()          查找一个元素

 get_allocator() 返回map的配置器

 insert()        插入元素

 key_comp()      返回比较元素key的函数

 lower_bound()   返回键值>=给定元素的第一个位置

 max_size()      返回可以容纳的最大元素个数

 rbegin()        返回一个指向map尾部的逆向迭代器

 rend()          返回一个指向map头部的逆向迭代器

 size()          返回map中元素的个数

 swap()           交换两个map

 upper_bound()    返回键值>给定元素的第一个位置

 value_comp()     返回比较元素value的函数

```

```c++
#include <iostream>
#include <map>  //map
#include <string> //string
using namespace std;
int main()
{
    // 仅仅初始化键时，值默认为0/“”
    std::map<string, string> mymap{ {"STL教程","http://c.biancheng.net/java/"} };
    //获取已存储键值对中，指定键对应的值
    cout << mymap["STL教程"] << endl;
 
    //向 map 容器添加新键值对
    mymap["Python教程"] = "http://c.biancheng.net/python/";
 
    //修改 map 容器已存储键值对中，指定键对应的值
    mymap["STL教程"] = "http://c.biancheng.net/stl/";
    // 遍历map
    for (auto iter = mymap.begin(); iter != mymap.end(); ++iter) {
        cout << iter->first << " " << iter->second << endl;
    }
   
    return 0;
}
// 结果为
// http://c.biancheng.net/java/
// Python教程 http://c.biancheng.net/python/
// STL教程 http://c.biancheng.net/stl/


```