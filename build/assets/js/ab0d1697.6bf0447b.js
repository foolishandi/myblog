"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2202],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>b});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),y=o,b=u["".concat(l,".").concat(y)]||u[y]||f[y]||a;return t?n.createElement(b,c(c({ref:r},s),{},{components:t})):n.createElement(b,c({ref:r},s))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=y;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6429:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={},c=void 0,i={unversionedId:"\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u5bf9\u8c61\u5224\u7b49deep",id:"\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u5bf9\u8c61\u5224\u7b49deep",title:"\u5bf9\u8c61\u5224\u7b49deep",description:"",source:"@site/docs/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u5bf9\u8c61\u5224\u7b49deep.md",sourceDirName:"\u524d\u7aef\u4e09\u5927\u4ef6/es6/array",slug:"/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u5bf9\u8c61\u5224\u7b49deep",permalink:"/docs/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u5bf9\u8c61\u5224\u7b49deep",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u5bf9\u8c61\u5224\u7b49deep.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6570\u7ec4\u8f6c\u6811",permalink:"/docs/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u6570\u7ec4\u8f6c\u6811"},next:{title:"\u6742",permalink:"/docs/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u6742"}},l={},p=[],s={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// \u57fa\u672c\u7c7b\u578b\u3001\u6570\u7ec4\u3001\u5bf9\u8c61{}\u5224\u7b49\u51fd\u6570\nconst objectEq = (obj1, obj2) => {\n  // \u7c7b\u578b\u5224\u65ad\n  if (\n    Object.prototype.toString.call(obj1) !==\n    Object.prototype.toString.call(obj2)\n  ) {\n    return false;\n  }\n  // \u5224\u65ad\u957f\u77ed\n  if (Object.keys(obj1).length !== Object.keys(obj2).length) {\n    return false;\n  }\n\n  if (Array.isArray(obj1) || typeof obj1 === "object") {\n    // \u6df1\u5ea6\u6bd4\u8f83\n    for (const [key1, value1] of Object.entries(obj1)) {\n      if (typeof obj2[key1] === "undefined" || !objectEq(value1, obj2[key1])) {\n        return false;\n      }\n    }\n    // \u901a\u8fc7\u6d4b\u8bd5\u5219\u4e3a\u771f\n    return true;\n  } else {\n    // \u57fa\u672c\u7c7b\u578b\u76f4\u63a5\u6bd4\u8f83\n    return obj1 === obj2;\n  }\n};\n')))}u.isMDXComponent=!0}}]);