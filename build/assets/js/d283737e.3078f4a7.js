"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3156],{3905:(n,t,e)=>{e.d(t,{Zo:()=>p,kt:()=>f});var s=e(67294);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,s)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function a(n,t){if(null==n)return{};var e,s,r=function(n,t){if(null==n)return{};var e,s,r={},i=Object.keys(n);for(s=0;s<i.length;s++)e=i[s],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(s=0;s<i.length;s++)e=i[s],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var c=s.createContext({}),l=function(n){var t=s.useContext(c),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},p=function(n){var t=l(n.components);return s.createElement(c.Provider,{value:t},n.children)},d="mdxType",g={inlineCode:"code",wrapper:function(n){var t=n.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(n,t){var e=n.components,r=n.mdxType,i=n.originalType,c=n.parentName,p=a(n,["components","mdxType","originalType","parentName"]),d=l(e),u=r,f=d["".concat(c,".").concat(u)]||d[u]||g[u]||i;return e?s.createElement(f,o(o({ref:t},p),{},{components:e})):s.createElement(f,o({ref:t},p))}));function f(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var i=e.length,o=new Array(i);o[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=n,a[d]="string"==typeof n?n:r,o[1]=a;for(var l=2;l<i;l++)o[l]=e[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,e)}u.displayName="MDXCreateElement"},21659:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=e(87462),r=(e(67294),e(3905));const i={},o=void 0,a={unversionedId:"\u670d\u52a1\u5668\u7aef/c++/c++/string",id:"\u670d\u52a1\u5668\u7aef/c++/c++/string",title:"string",description:"string\u8be6\u89e3",source:"@site/docs/\u670d\u52a1\u5668\u7aef/c++/c++/string.md",sourceDirName:"\u670d\u52a1\u5668\u7aef/c++/c++",slug:"/\u670d\u52a1\u5668\u7aef/c++/c++/string",permalink:"/docs/\u670d\u52a1\u5668\u7aef/c++/c++/string",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/\u670d\u52a1\u5668\u7aef/c++/c++/string.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"set",permalink:"/docs/\u670d\u52a1\u5668\u7aef/c++/c++/set"},next:{title:"time",permalink:"/docs/\u670d\u52a1\u5668\u7aef/c++/c++/time"}},c={},l=[{value:"string\u8be6\u89e3",id:"string\u8be6\u89e3",level:2},{value:"\u6784\u9020\u51fd\u6570",id:"\u6784\u9020\u51fd\u6570",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2}],p={toc:l};function d(n){let{components:t,...e}=n;return(0,r.kt)("wrapper",(0,s.Z)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"string\u8be6\u89e3"},"string\u8be6\u89e3"),(0,r.kt)("p",null,"string\u4e0d\u662f\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff0c\u662fC++\u4e2d\u5bf9char\u5c01\u88c5\u6210\u7684\u7c7b\uff0c\u6240\u4ee5C\u8bed\u8a00\u4e2d\u6ca1\u6709string\u3002"),(0,r.kt)("p",null,"String\u7c7b\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u5bf9String\u7c7b\u7684\u4efb\u4f55\u6539\u53d8\uff0c\u90fd\u662f\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684String\u7c7b\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"\u5934\u6587\u4ef6\uff1a  ",(0,r.kt)("inlineCode",{parentName:"p"},"#include<string>")),(0,r.kt)("h2",{id:"\u6784\u9020\u51fd\u6570"},"\u6784\u9020\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'string s1();   //s1\u4e3a\u7a7a\nstring s2("hello");\nstring s3(4,\'w\');    //s3="wwww";\nstring s4("12345",1,3);   //s4="234";\n \n//\u4e0d\u80fd\u76f4\u63a5string s(\'w\');\n')),(0,r.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'//\u62f7\u8d1d\u8d4b\u503c\nstring s1;\ns1 = "Hello";  // s1 = "Hello"\ns2 = \'K\';  // s2 = "K\u201d\n//\u5229\u7528assign\u51fd\u6570\nstring s1("12345"), s2;\ns3.assign(s1);  // s3 = s1\ns2.assign(s1, 1, 2);  // s2 = "23"\uff0c\u5373 s1 \u7684\u5b50\u4e32(1, 2)\ns2.assign(4, \'K\');  // s2 = "KKKK"\ns2.assign("abcde", 2, 3);  // s2 = "cde"\uff0c\u5373 "abcde" \u7684\u5b50\u4e32(2, 3)\n//\u5229\u7528+\nstring s;\ns+=a[i];\n//\u5229\u7528substr\u51fd\u6570\nstring s1,s2;\ns1="hello";\ns2=s1.substr(0,3);   //s2="hel";\n')),(0,r.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'--------------------\nstring s1("123"), s2("abc");  //\u4ee5\u4e0b\u64cd\u4f5c\u4e3a\u5e73\u884c\u64cd\u4f5c\ns1.append(s2);  // s1 = "123abc"\ns1.append(s2, 1, 2);  // s1 = "123bc"\ns1.append(3, \'K\');  // s1 = "123KKK"\ns1.append("ABCDE", 2, 3);  // s1 = "123CDE"\uff0c\u6dfb\u52a0 "ABCDE" \u7684\u5b50\u4e32(2, 3)\n\n----------------------\nstring s1="abandon";\nstring s2="about";\nint b=s1.compare(s2);//\u76f4\u63a5\u6bd4\u8f83\uff0cs1\u5c0f\u4e8es2\uff0c\u6545\u8fd4\u56de-1\ncout<<b<<endl;\n\nint c=s1.compare(2,4,s2);//s1\u4e0b\u6807\u4e3a2\u7684\u5b57\u7b26a\u5f00\u59cb\u76844\u4e2a\u5b57\u7b26ando\u548cs2\u8fdb\u884c\u6bd4\u8f83\u3002ando\u5927\u4e8es2\u6545\u8fd4\u56de1\ncout<<c<<endl;\n\nint d=s1.compare(2,4,s2,1,3);\ncout<<d<<endl;//s1\u4e0b\u6807\u4e3a2\u7684\u5b57\u7b26a\u5f00\u59cb\u76844\u4e2a\u5b57\u7b26ando\u548cs2\u4e0b\u6807\u4e3a1\u7684\u5b57\u7b26b\u5f00\u59cb\u76843\u4e2a\u5b57\u7b26bou\u6bd4\u8f83\u3002\u524d\u8005\u5c0f\uff0c\u6545\u8fd4\u56de-1\u3002\n\nstring s3="abc";\nstring s4="abc";\nint e=s3.compare(s4);//\u76f8\u7b49\u8fd4\u56de0\ncout<<e<<endl;\n\n--------------------------\nstring s1("hello");\nstring s2("hi");\ns1.swap(s2);\n\n--------------------------\n/*\nstring\u7684find()\u51fd\u6570\u7528\u4e8e\u627e\u51fa\u5b57\u6bcd\u5728\u5b57\u7b26\u4e32\u4e2d\u7684\u4f4d\u7f6e\u3002\n \nfind(str,position)\n \nfind()\u7684\u4e24\u4e2a\u53c2\u6570\uff1a\n \nstr\uff1a\u662f\u8981\u627e\u7684\u5143\u7d20\n \nposition\uff1a\u5b57\u7b26\u4e32\u4e2d\u7684\u67d0\u4e2a\u4f4d\u7f6e\uff0c\u8868\u793a\u4ece\u4ece\u8fd9\u4e2a\u4f4d\u7f6e\u5f00\u59cb\u7684\u5b57\u7b26\u4e32\u4e2d\u627e\u6307\u5b9a\u5143\u7d20\u3002\n \n\u53ef\u4ee5\u4e0d\u586b\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u9ed8\u8ba4\u4ece\u5b57\u7b26\u4e32\u7684\u5f00\u5934\u8fdb\u884c\u67e5\u627e\u3002\n \n\u8fd4\u56de\u503c\u4e3a\u76ee\u6807\u5b57\u7b26\u7684\u4f4d\u7f6e\uff0c\u5f53\u6ca1\u6709\u627e\u5230\u76ee\u6807\u5b57\u7b26\u65f6\u8fd4\u56denpos\u3002\n*/\n \nstring s = "hello world!";\ncout << s.find("e") << endl;   // 1\n \nstring s = "hello world!";\nif (s.find("a") == s.npos) {\n    cout << "404 not found" << endl;\n}\n \nstring s = "hello world!";\ncout << s.find("l",5) << endl;   //9\n \n//\u627e\u5230\u76ee\u6807\u5b57\u7b26\u5728\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e00\u6b21\u51fa\u73b0\u548c\u6700\u540e\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e \nstring s = "hello world!";\ncout << "first time occur in s:"<<s.find_first_of("l") << endl;    // 2\ncout << "last time occur in s:" << s.find_last_of("l") << endl;    // 9\n \n//\u53cd\u5411\u67e5\u627e\nstring s = "hello world!";\ncout << s.rfind("l") << endl;\n\n\n-------------------\n string str="hello";\nstring s="Hahah";\nstr.insert(1,s);//\u5728\u539f\u4e32\u4e0b\u6807\u4e3a1\u7684\u5b57\u7b26e\u524d\u63d2\u5165\u5b57\u7b26\u4e32s\ncout<<str<<endl;        // "Hhelloahah"\n\nstring str1="hello";\nchar c=\'w\';\nstr1.insert(4,5,c);//\u5728\u539f\u4e32\u4e0b\u6807\u4e3a4\u7684\u5b57\u7b26o\u524d\u63d2\u51655\u4e2a\u5b57\u7b26c\ncout<<str1<<endl;            //  helloccccco\n\nstring str2="hello";\nstring s2="weakhaha";\nstr2.insert(0,s2,1,3);//\u5c06\u5b57\u7b26\u4e32s2\u4ece\u4e0b\u6807\u4e3a1\u7684e\u5f00\u59cb\u65703\u4e2a\u5b57\u7b26\uff0c\u5206\u522b\u662feak\uff0c\u63d2\u5165\u539f\u4e32\u7684\u4e0b\u6807\u4e3a0\u7684\u5b57\u7b26h\u524d\ncout<<str2<<endl;            // eakhello\n\n\n\n---------------\nstring s("12345asdf");\nstring a = s.substr(0,5);     //\u83b7\u5f97\u5b57\u7b26\u4e32s\u4e2d\u4ece\u7b2c0\u4f4d\u5f00\u59cb\u7684\u957f\u5ea6\u4e3a5\u7684\u5b57\u7b26\u4e32\n\n\n---------------\n//\u7528str\u66ff\u6362\u6307\u5b9a\u5b57\u7b26\u4e32\u4ece\u8d77\u59cb\u4f4d\u7f6epos\u5f00\u59cb\u957f\u5ea6\u4e3alen\u7684\u5b57\u7b26 \nstring& replace (size_t pos, size_t len, const string& str); \nstring s="12345";\ns=s.replace(2,3,"aa");   //s="12aa";\n \n \n \n//\u7528str\u66ff\u6362 \u8fed\u4ee3\u5668\u8d77\u59cb\u4f4d\u7f6e \u548c \u7ed3\u675f\u4f4d\u7f6e \u7684\u5b57\u7b26 \nstring& replace (const_iterator i1, const_iterator i2, const string& str);\n \nstring s="12345";\ns=s.replace(s.begin(),s.begin()+3,"aaa");  //s="aaa45";\n \nstring s1("Real Steel");\ns1.replace(1, 3, "123456", 2, 4);  //\u7528 "123456" \u7684\u5b50\u4e32(2,4) \u66ff\u6362 s1 \u7684\u5b50\u4e32(1,3)\ncout << s1 << endl;  //\u8f93\u51fa R3456 Steel\n \nstring s2("Harry Potter");\ns2.replace(2, 3, 5, \'0\');  //\u7528 5 \u4e2a \'0\' \u66ff\u6362\u5b50\u4e32(2,3)\ncout << s2 << endl;  //\u8f93\u51fa HaOOOOO Potter\n \nint n = s2.find("OOOOO");  //\u67e5\u627e\u5b50\u4e32 "00000" \u7684\u4f4d\u7f6e\uff0cn=2\ns2.replace(n, 5, "XXX");  //\u5c06\u5b50\u4e32(n,5)\u66ff\u6362\u4e3a"XXX"\ncout << s2 < < endl;  //\u8f93\u51fa HaXXX Potter\n\n-----------------------\nint a = 4;\ndouble b = 3.14;\nstring str1, str2;\nstr1 = to_string(a);\nstr2 = to_string(b);\n\n\n\n-----------------------\n// stoi() \u548catoi() \u51fd\u6570\u5c06\u5b57\u7b26\u4e32\u8f6c\u5316\u4e3aint\u578b\n// \u533a\u522b\u662fstoi\u7684\u5f62\u53c2\u662fconst string*\uff0c\u800catoi\u7684\u5f62\u53c2\u662fconst char*\u3002c_str()\u7684\u4f5c\u7528\u662f\u5c06const string*\u8f6c\u5316\u4e3aconst char*\n\nstring s1("1234567");\nchar* s2 = "1234567";\nint a = stoi(s1);\nint b = atoi(s2);\nint c = atoi(s1.c_str());\n')))}d.isMDXComponent=!0}}]);