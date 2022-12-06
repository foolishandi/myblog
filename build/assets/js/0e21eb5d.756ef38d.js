"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1787],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},i=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(t),y=a,f=u["".concat(l,".").concat(y)]||u[y]||m[y]||o;return t?n.createElement(f,c(c({ref:r},i),{},{components:t})):n.createElement(f,c({ref:r},i))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=y;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},5389:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={},c=void 0,s={unversionedId:"es6/array/\u4e2d\u7ea7/\u6570\u7ec4\u6392\u5e8f\u3001\u53bb\u91cd",id:"es6/array/\u4e2d\u7ea7/\u6570\u7ec4\u6392\u5e8f\u3001\u53bb\u91cd",title:"\u6570\u7ec4\u6392\u5e8f\u3001\u53bb\u91cd",description:"",source:"@site/docs/es6/array/\u4e2d\u7ea7/\u6570\u7ec4\u6392\u5e8f\u3001\u53bb\u91cd.md",sourceDirName:"es6/array/\u4e2d\u7ea7",slug:"/es6/array/\u4e2d\u7ea7/\u6570\u7ec4\u6392\u5e8f\u3001\u53bb\u91cd",permalink:"/docs/es6/array/\u4e2d\u7ea7/\u6570\u7ec4\u6392\u5e8f\u3001\u53bb\u91cd",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/es6/array/\u4e2d\u7ea7/\u6570\u7ec4\u6392\u5e8f\u3001\u53bb\u91cd.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u521d\u59cb\u5316\u6570\u7ec4",permalink:"/docs/es6/array/\u4e2d\u7ea7/\u521d\u59cb\u5316\u6570\u7ec4"},next:{title:"\u6570\u7ec4\u64cd\u4f5c",permalink:"/docs/es6/array/\u4e2d\u7ea7/\u6570\u7ec4\u64cd\u4f5c"}},l={},p=[],i={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let arr1 = [2, 1, 3, 2, 4, 5, 4, 7];\nlet arr2 = [\n  [1, 2],\n  [3, 4],\n  [5, 1],\n];\nlet obj = [{ c: 1 }, { c: 5 }, { c: 3 }];\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"1.arr1.sort((a,b)=>a-b) //\u4f1a\u6539\u53d8\u539f\u6570\u7ec4 >arr1=[1,2,2,3,4,4,7]\n\n2.arr2.sort((a,b)=>a[0]-a[0]) // >arr2=[[1,2],[3,4],[5,1]]\narr2.sort((a,b)=>a[1]-a[1]) // >arr2=[[5,1],[1,2],[3,4]\nobj.sort((a,b)=>a.c-b.c) // >obj=[{c:1},{c:3},{c:5}]\n\n3.let arr0=[...new Set(arr1)] //\u53bb\u91cd >arr0=[2,1,3,4,5,7]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u4e2d\u6587\u6392\u5e8f\nlet array = ["\u6b66\u6c49", "\u5317\u4eac", "\u4e0a\u6d77", "\u5929\u6d25"];\nlet resultArray = array.sort(function (param1, param2) {\n  return param1.localeCompare(param2, "zh");\n});\nconsole.log(resultArray);\n')))}u.isMDXComponent=!0}}]);