"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9884],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,y=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return t?n.createElement(y,i(i({ref:r},p),{},{components:t})):n.createElement(y,i({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6049:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const a={position:21},i=void 0,c={unversionedId:"\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u6742",id:"\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u6742",title:"\u6742",description:"",source:"@site/docs/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u6742.md",sourceDirName:"\u524d\u7aef\u4e09\u5927\u4ef6/es6/array",slug:"/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u6742",permalink:"/docs/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u6742",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u6742.md",tags:[],version:"current",frontMatter:{position:21},sidebar:"tutorialSidebar",previous:{title:"\u5bf9\u8c61\u5224\u7b49deep",permalink:"/docs/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u5bf9\u8c61\u5224\u7b49deep"},next:{title:"basic",permalink:"/docs/\u524d\u7aef\u4e09\u5927\u4ef6/es6/object/basic"}},s={},l=[],p={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"1.var \u5173\u952e\u5b57\nfor(var i = 0; i < 5; i++){\n    setTimeout(() =>{\n    console.log(i)\n    },1000)\n}\n// > 5 5 5 5 5\n\n2.let \u5f62\u6210\u5c40\u90e8\u4f5c\u7528\u57df\nfor(let i=0;i<5;i++){\n    setTimeout(()=>console.log(i),i\\*1000)\n}\n// >0 1 2 3 4\n\n3.setTimeout \u7b2c\u4e09\u4e2a\u53c2\u6570\u4e3a\u4f20\u5165\u53c2\u6570\n    for(var i=0;i<5;i++){\n    setTimeout((j)=>console.log(j),i\\*1000,i)\n}\n// >0 1 2 3 4\n")))}u.isMDXComponent=!0}}]);