"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,b=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,l={unversionedId:"web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/intl",id:"web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/intl",title:"intl",description:"1. \u4e2d\u6587\u6392\u5e8f",source:"@site/docs/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/intl.md",sourceDirName:"web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6",slug:"/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/intl",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/intl",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/intl.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JSON.stringify",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/JSON.stringify"},next:{title:"mutationObserver",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/mutationObserver"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4e2d\u6587\u6392\u5e8f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let arrUsername = [\n  "\u9648\u5764",\n  "\u9093\u8d85",\n  "\u675c\u6df3",\n  "\u51af\u7ecd\u5cf0",\n  "\u97e9\u5e9a",\n  "\u80e1\u6b4c",\n  "\u9ec4\u6653\u660e",\n  "\u8d3e\u4e43\u4eae",\n  "\u674e\u6668",\n  "\u674e\u6613\u5cf0",\n  "\u9e7f\u6657",\n  "\u4e95\u67cf\u7136",\n  "\u5218\u70e8",\n  "\u9646\u6bc5",\n  "\u5b59\u7ea2\u96f7",\n];\n\narrUsername.sort(new Intl.Collator("zh").compare);\n// \u7ed3\u679c\u662f\uff1a["\u9648\u5764", "\u9093\u8d85", "\u675c\u6df3", "\u51af\u7ecd\u5cf0", "\u97e9\u5e9a", "\u80e1\u6b4c", "\u9ec4\u6653\u660e", "\u8d3e\u4e43\u4eae", "\u4e95\u67cf\u7136", "\u674e\u6668", "\u674e\u6613\u5cf0", "\u5218\u70e8", "\u9646\u6bc5", "\u9e7f\u6657", "\u5b59\u7ea2\u96f7"]\n//\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u6570\u5b57 3 \u4f4d\u5206\u7ec4")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'new Intl.NumberFormat(undefined, {\n  minimumFractionDigits: 4,\n}).format(12345.6789);\n// \u7ed3\u679c\u662f\uff1a"12,345.6789"\n')))}u.isMDXComponent=!0}}]);