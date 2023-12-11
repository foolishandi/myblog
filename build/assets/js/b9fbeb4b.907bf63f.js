"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[331],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||c;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94424:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const c={},i=void 0,a={unversionedId:"\u670d\u52a1\u5668\u7aef/c++/c++/\u5b57\u7b26\u4e32\u5904\u7406/\u57fa\u7840",id:"version-1.0/\u670d\u52a1\u5668\u7aef/c++/c++/\u5b57\u7b26\u4e32\u5904\u7406/\u57fa\u7840",title:"\u57fa\u7840",description:"1 \u8f93\u5165\u8f93\u51fa",source:"@site/versioned_docs/version-1.0/\u670d\u52a1\u5668\u7aef/c++/c++/\u5b57\u7b26\u4e32\u5904\u7406/\u57fa\u7840.md",sourceDirName:"\u670d\u52a1\u5668\u7aef/c++/c++/\u5b57\u7b26\u4e32\u5904\u7406",slug:"/\u670d\u52a1\u5668\u7aef/c++/c++/\u5b57\u7b26\u4e32\u5904\u7406/\u57fa\u7840",permalink:"/docs/\u670d\u52a1\u5668\u7aef/c++/c++/\u5b57\u7b26\u4e32\u5904\u7406/\u57fa\u7840",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/versioned_docs/version-1.0/\u670d\u52a1\u5668\u7aef/c++/c++/\u5b57\u7b26\u4e32\u5904\u7406/\u57fa\u7840.md",tags:[],version:"1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"time",permalink:"/docs/\u670d\u52a1\u5668\u7aef/c++/c++/time"},next:{title:"\u6570\u5b57\u76f8\u5173",permalink:"/docs/\u670d\u52a1\u5668\u7aef/c++/c++/\u6570\u5b57\u76f8\u5173"}},l={},s=[{value:"1 \u8f93\u5165\u8f93\u51fa",id:"1-\u8f93\u5165\u8f93\u51fa",level:2},{value:"2 \u8f6c\u6362",id:"2-\u8f6c\u6362",level:2},{value:"3 \u8ba1\u6570",id:"3-\u8ba1\u6570",level:2}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-\u8f93\u5165\u8f93\u51fa"},"1 \u8f93\u5165\u8f93\u51fa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},'#include <iostream>\n#include <string>\n\n...\nstring s;\ncin >> s;\ncout << "test"<<endl;\n\n------\nchar c=getchar();\ngetline(cin,s)\n\n')),(0,o.kt)("h2",{id:"2-\u8f6c\u6362"},"2 \u8f6c\u6362"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"#include <algorithm>\n#include <iostream>\n#include <string>\n\ntransform(strTest.begin(), strTest.end(), strTest.begin(), ::tolower);\n\nchar c = toupper(getchar());\n\n")),(0,o.kt)("h2",{id:"3-\u8ba1\u6570"},"3 \u8ba1\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"#include <algorithm>\n#include <iostream>\n#include <string>\n#include <unordered_map>\n\n\nstring s = \"aaabcdaaa!!!\";\nint cnt= count(s.begin(),s.end(),'b');\n\n...\nstring s;\ngetline(cin, s);\nchar c = tolower(getchar());\n// \u6cd5\u4e00\nuint16_t n = 0;\nfor (auto i : s) {\n    if (tolower(i) == c) {\n        ++n;\n    }\n}\n// \u6cd5\u4e8c\ncount_if(s.begin(), s.end(), [c](char i) {\n    return towlower(i) == c;\n})\n\n// \u6cd5\u4e09\nunordered_map<char, size_t> unorderedMap;\nfor (auto i : s) {\n    ++unorderedMap[tolower(i)];\n}\ncout << unorderedMap[tolower(c)] << endl;\n")))}p.isMDXComponent=!0}}]);