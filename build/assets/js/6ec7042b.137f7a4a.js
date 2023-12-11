"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5918],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=i,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||s;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=m;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<s;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1895:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const s={},o=void 0,c={unversionedId:"\u670d\u52a1\u5668\u7aef/c++/c++/set",id:"version-1.0/\u670d\u52a1\u5668\u7aef/c++/c++/set",title:"set",description:"set\u6709\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u7279\u6027\uff0c\u90a3\u5c31\u662f\u81ea\u52a8\u5347\u5e8f\u6392\u5e8f",source:"@site/versioned_docs/version-1.0/\u670d\u52a1\u5668\u7aef/c++/c++/set.md",sourceDirName:"\u670d\u52a1\u5668\u7aef/c++/c++",slug:"/\u670d\u52a1\u5668\u7aef/c++/c++/set",permalink:"/docs/\u670d\u52a1\u5668\u7aef/c++/c++/set",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/versioned_docs/version-1.0/\u670d\u52a1\u5668\u7aef/c++/c++/set.md",tags:[],version:"1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"map",permalink:"/docs/\u670d\u52a1\u5668\u7aef/c++/c++/map"},next:{title:"string",permalink:"/docs/\u670d\u52a1\u5668\u7aef/c++/c++/string"}},a={},l=[{value:"\u904d\u5386",id:"\u904d\u5386",level:2}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"set\u6709\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u7279\u6027\uff0c\u90a3\u5c31\u662f\u81ea\u52a8\u5347\u5e8f\u6392\u5e8f")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"#include <iostream>\n#include <cstdio>\n#include <set>\nusing namespace std;\n\n// \u5b9a\u4e49set:\n1.set<int> s;\n2.\u8fd8\u53ef\u4ee5\u628a\u4e00\u4e2a\u6570\u7ec4\u653e\u8fdb\u53bb\uff1aset<int> s(arr.begin(),arr.end());\n\n\u5b9a\u4e49\u8fed\u4ee3\u5668\uff1aset<int>::iterator ite;\n\n// set\u65b9\u6cd5\uff1a\n1.insert()   \u5411set\u5bb9\u5668\u4e2d\u63d2\u5165\u5143\u7d20\n2.erase()   \u6309\u5143\u7d20\u503c\u5220\u9664\u5143\u7d20\n3.begin()   \u5bb9\u5668\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u7d22\u5f15\uff0c*(s.begin())\u4e3a\u8be5\u5143\u7d20\u7684\u503c\n4.end()   \u6307\u5411\u5bb9\u5668\u4e2d\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u4e0b\u4e00\u4f4d\n5.rbegin()   \u5bb9\u5668\u4e2d\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u7d22\u5f15\n6.rend()   \u5bb9\u5668\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u7d22\u5f15\n7.size()   set\u5bb9\u5668\u7684\u5927\u5c0f\n8.find()   \u8fd4\u56de\u4e00\u4e2a\u6307\u5411\u88ab\u67e5\u627e\u5230\u5143\u7d20\u7684\u8fed\u4ee3\u5668\n9.count()   \u8fd4\u56de\u67d0\u4e2a\u5143\u7d20\u51fa\u73b0\u7684\u4e2a\u6570\n10.empty()   \u5bb9\u5668\u662f\u5426\u4e3a\u7a7a\uff0c\u7a7a\u4e3atrue\n11.clear()   \u6e05\u7a7a\u5bb9\u5668\n\n")),(0,i.kt)("h2",{id:"\u904d\u5386"},"\u904d\u5386"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"#include<iostream>\n#include<set>\nusing namespace std;\nint main(){\n    set<int> s;//\u5b9a\u4e49 \n    s.insert(1);//\u63d2\u5165\u5143\u7d201 \n    s.insert(3);//\u63d2\u5165\u5143\u7d203\n    s.insert(2);//\u63d2\u5165\u5143\u7d202\n\n    for(auto it:s){\n        cout<<it<<' ';\n    } \n\n    // set<int>::iterator it;//\u4f7f\u7528\u8fed\u4ee3\u5668\n    // for(it=s.begin();it!=s.end();it++){\n    //  cout<<*it<<' ';\n    // } \n} \n\n// \u964d\u5e8f\n#include<iostream>\n#include<set>\nusing namespace std;\nint main(){\n    set<int> s;//\u5b9a\u4e49 \n    s.insert(1);//\u63d2\u5165\u5143\u7d201 \n    s.insert(3);//\u63d2\u5165\u5143\u7d203\n    s.insert(2);//\u63d2\u5165\u5143\u7d202\n\n    set<int>::iterator it;//\u4f7f\u7528\u8fed\u4ee3\u5668\n    for(it=--s.end();it!=--s.begin();it--){\n        cout<<*it<<' ';\n    } \n\n    // set<int>::reverse_iterator it;//\u4f7f\u7528\u53cd\u5411\u8fed\u4ee3\u5668\n    // for(it=s.rbegin();it!=s.rend();it++){\n    //  cout<<*it<<' ';\n    // } \n} \n\n")))}p.isMDXComponent=!0}}]);