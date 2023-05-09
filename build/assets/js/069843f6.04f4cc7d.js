"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9312],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>f});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=s(r),m=a,f=l["".concat(c,".").concat(m)]||l[m]||u[m]||o;return r?t.createElement(f,i(i({ref:n},d),{},{components:r})):t.createElement(f,i({ref:n},d))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[l]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52365:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var t=r(87462),a=(r(67294),r(3905));const o={sidebar_position:3},i=void 0,p={unversionedId:"\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u6570\u7ec4\u8f6c\u6811",id:"\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u6570\u7ec4\u8f6c\u6811",title:"\u6570\u7ec4\u8f6c\u6811",description:"1.\u666e\u901a\u904d\u5386",source:"@site/docs/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u6570\u7ec4\u8f6c\u6811.md",sourceDirName:"\u524d\u7aef\u4e09\u5927\u4ef6/es6/array",slug:"/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u6570\u7ec4\u8f6c\u6811",permalink:"/docs/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u6570\u7ec4\u8f6c\u6811",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u6570\u7ec4\u8f6c\u6811.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"reduce",permalink:"/docs/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u9ad8\u7ea7/reduce"},next:{title:"\u5bf9\u8c61\u5224\u7b49deep",permalink:"/docs/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u5bf9\u8c61\u5224\u7b49deep"}},c={},s=[{value:"1.\u666e\u901a\u904d\u5386",id:"1\u666e\u901a\u904d\u5386",level:2},{value:"2.reduce",id:"2reduce",level:2}],d={toc:s};function l(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const testData = [\n  { id: 1, parentId: "", name: "\u7b2c\u4e09\u65b9" },\n  { id: 2, parentId: 1, name: "\u7b2c\u4e09\u65b9" },\n  { id: 3, parentId: 1, name: "\u7b2c\u4e09\u65b9" },\n  { id: 4, parentId: 1, name: "\u7b2c\u4e09\u65b9" },\n  { id: 5, parentId: "", name: "\u7b2c\u4e09\u65b9" },\n  { id: 6, parentId: "", name: "\u7b2c\u4e09\u65b9" },\n  { id: 1, parentId: "", name: "\u7b2c434343\u65b9" },\n];\n')),(0,a.kt)("h2",{id:"1\u666e\u901a\u904d\u5386"},"1.\u666e\u901a\u904d\u5386"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function listToTree(data) {\n  // * \u5148\u751f\u6210parent\u5efa\u7acb\u7236\u5b50\u5173\u7cfb\n  const obj = {};\n  data.forEach((item) => {\n    obj[item.id] = item;\n  });\n  // * obj -> {1001: {id: 1001, parentId: 0, name: 'AA'}, 1002: {...}}\n  // console.log(obj, \"obj\")\n  const parentList = [];\n  data.forEach((item) => {\n    const parent = obj[item.parentId];\n    if (parent) {\n      // * \u5f53\u524d\u9879\u6709\u7236\u8282\u70b9\n      parent.children = parent.children || [];\n      parent.children.push(item);\n    } else {\n      // * \u5f53\u524d\u9879\u6ca1\u6709\u7236\u8282\u70b9 -> \u9876\u5c42\n      parentList.push(item);\n    }\n  });\n  return parentList;\n}\n")),(0,a.kt)("h2",{id:"2reduce"},"2.reduce"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function array2tree(array) {\n  return JSON.parse(JSON.stringify(array)).reduce((pre, next) => {\n    const { id, parentId } = next;\n    if (pre[parentId]) {\n      pre[parentId].children = (pre[parentId].children || []).concat([next]);\n    } else {\n      if (pre[id]) {\n        pre[id] = { ...pre[id], ...next };\n      } else {\n        pre[id] = next;\n      }\n    }\n    return pre;\n  }, {});\n}\n")))}l.isMDXComponent=!0}}]);