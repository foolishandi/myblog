"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7973],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||b[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},10990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,l={unversionedId:"intro/\u914d\u7f6e/\u914d\u7f6ebabel/\u57fa\u672c\u914d\u7f6e",id:"intro/\u914d\u7f6e/\u914d\u7f6ebabel/\u57fa\u672c\u914d\u7f6e",title:"\u57fa\u672c\u914d\u7f6e",description:"\u5b89\u88c5",source:"@site/docs/intro/\u914d\u7f6e/\u914d\u7f6ebabel/\u57fa\u672c\u914d\u7f6e.md",sourceDirName:"intro/\u914d\u7f6e/\u914d\u7f6ebabel",slug:"/intro/\u914d\u7f6e/\u914d\u7f6ebabel/\u57fa\u672c\u914d\u7f6e",permalink:"/docs/intro/\u914d\u7f6e/\u914d\u7f6ebabel/\u57fa\u672c\u914d\u7f6e",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/intro/\u914d\u7f6e/\u914d\u7f6ebabel/\u57fa\u672c\u914d\u7f6e.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u914d\u7f6e",permalink:"/docs/intro/\u914d\u7f6e/\u914d\u7f6epackage.json/\u57fa\u672c\u914d\u7f6e"},next:{title:"antd_tooptip",permalink:"/docs/intro/\u95ee\u9898\u96c6\u5408/antd_tooptip"}},c={},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"npm i -D @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/polyfill @babel/plugin-transform-runtime @babel/runtime-corejs2\n")),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=babel.config.js",title:"babel.config.js"},'{\n  "presets": [\n    [\n      "@babel/env",\n      {\n        "targets": {\n          "edge": "17",\n          "firefox": "60",\n          "chrome": "67",\n          "safari": "11.1"\n        },\n        "useBuiltIns": "usage",\n        "corejs": "3.6.5"\n      }\n    ]\n  ],\n  "plugins": [\n    [\n      "@babel/plugin-transform-runtime",\n\n      {\n        "corejs": 2\n      }\n    ]\n  ]\n}\n')))}u.isMDXComponent=!0}}]);