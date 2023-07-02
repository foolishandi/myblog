## string详解
string不是基本数据类型，是C++中对char封装成的类，所以C语言中没有string。

String类是不可变的，对String类的任何改变，都是返回一个新的String类对象。

头文件：  `#include<string>`

## 构造函数
```c++
string s1();   //s1为空
string s2("hello");
string s3(4,'w');    //s3="wwww";
string s4("12345",1,3);   //s4="234";
 
//不能直接string s('w');
```
## 初始化
```c++
//拷贝赋值
string s1;
s1 = "Hello";  // s1 = "Hello"
s2 = 'K';  // s2 = "K”
//利用assign函数
string s1("12345"), s2;
s3.assign(s1);  // s3 = s1
s2.assign(s1, 1, 2);  // s2 = "23"，即 s1 的子串(1, 2)
s2.assign(4, 'K');  // s2 = "KKKK"
s2.assign("abcde", 2, 3);  // s2 = "cde"，即 "abcde" 的子串(2, 3)
//利用+
string s;
s+=a[i];
//利用substr函数
string s1,s2;
s1="hello";
s2=s1.substr(0,3);   //s2="hel";
```

## 函数
```c++
--------------------
string s1("123"), s2("abc");  //以下操作为平行操作
s1.append(s2);  // s1 = "123abc"
s1.append(s2, 1, 2);  // s1 = "123bc"
s1.append(3, 'K');  // s1 = "123KKK"
s1.append("ABCDE", 2, 3);  // s1 = "123CDE"，添加 "ABCDE" 的子串(2, 3)

----------------------
string s1="abandon";
string s2="about";
int b=s1.compare(s2);//直接比较，s1小于s2，故返回-1
cout<<b<<endl;

int c=s1.compare(2,4,s2);//s1下标为2的字符a开始的4个字符ando和s2进行比较。ando大于s2故返回1
cout<<c<<endl;

int d=s1.compare(2,4,s2,1,3);
cout<<d<<endl;//s1下标为2的字符a开始的4个字符ando和s2下标为1的字符b开始的3个字符bou比较。前者小，故返回-1。

string s3="abc";
string s4="abc";
int e=s3.compare(s4);//相等返回0
cout<<e<<endl;

--------------------------
string s1("hello");
string s2("hi");
s1.swap(s2);

--------------------------
/*
string的find()函数用于找出字母在字符串中的位置。
 
find(str,position)
 
find()的两个参数：
 
str：是要找的元素
 
position：字符串中的某个位置，表示从从这个位置开始的字符串中找指定元素。
 
可以不填第二个参数，默认从字符串的开头进行查找。
 
返回值为目标字符的位置，当没有找到目标字符时返回npos。
*/
 
string s = "hello world!";
cout << s.find("e") << endl;   // 1
 
string s = "hello world!";
if (s.find("a") == s.npos) {
    cout << "404 not found" << endl;
}
 
string s = "hello world!";
cout << s.find("l",5) << endl;   //9
 
//找到目标字符在字符串中第一次出现和最后一次出现的位置 
string s = "hello world!";
cout << "first time occur in s:"<<s.find_first_of("l") << endl;    // 2
cout << "last time occur in s:" << s.find_last_of("l") << endl;    // 9
 
//反向查找
string s = "hello world!";
cout << s.rfind("l") << endl;


-------------------
 string str="hello";
string s="Hahah";
str.insert(1,s);//在原串下标为1的字符e前插入字符串s
cout<<str<<endl;        // "Hhelloahah"

string str1="hello";
char c='w';
str1.insert(4,5,c);//在原串下标为4的字符o前插入5个字符c
cout<<str1<<endl;            //  helloccccco

string str2="hello";
string s2="weakhaha";
str2.insert(0,s2,1,3);//将字符串s2从下标为1的e开始数3个字符，分别是eak，插入原串的下标为0的字符h前
cout<<str2<<endl;            // eakhello



---------------
string s("12345asdf");
string a = s.substr(0,5);     //获得字符串s中从第0位开始的长度为5的字符串


---------------
//用str替换指定字符串从起始位置pos开始长度为len的字符 
string& replace (size_t pos, size_t len, const string& str); 
string s="12345";
s=s.replace(2,3,"aa");   //s="12aa";
 
 
 
//用str替换 迭代器起始位置 和 结束位置 的字符 
string& replace (const_iterator i1, const_iterator i2, const string& str);
 
string s="12345";
s=s.replace(s.begin(),s.begin()+3,"aaa");  //s="aaa45";
 
string s1("Real Steel");
s1.replace(1, 3, "123456", 2, 4);  //用 "123456" 的子串(2,4) 替换 s1 的子串(1,3)
cout << s1 << endl;  //输出 R3456 Steel
 
string s2("Harry Potter");
s2.replace(2, 3, 5, '0');  //用 5 个 '0' 替换子串(2,3)
cout << s2 << endl;  //输出 HaOOOOO Potter
 
int n = s2.find("OOOOO");  //查找子串 "00000" 的位置，n=2
s2.replace(n, 5, "XXX");  //将子串(n,5)替换为"XXX"
cout << s2 < < endl;  //输出 HaXXX Potter

-----------------------
int a = 4;
double b = 3.14;
string str1, str2;
str1 = to_string(a);
str2 = to_string(b);



-----------------------
// stoi() 和atoi() 函数将字符串转化为int型
// 区别是stoi的形参是const string*，而atoi的形参是const char*。c_str()的作用是将const string*转化为const char*

string s1("1234567");
char* s2 = "1234567";
int a = stoi(s1);
int b = atoi(s2);
int c = atoi(s1.c_str());
```