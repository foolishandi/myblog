"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6465],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>y});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),i=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=i(e.components);return t.createElement(p.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=i(r),m=a,y=s["".concat(p,".").concat(m)]||s[m]||f[m]||o;return r?t.createElement(y,c(c({ref:n},l),{},{components:r})):t.createElement(y,c({ref:n},l))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u[s]="string"==typeof e?e:a,c[1]=u;for(var i=2;i<o;i++)c[i]=r[i];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22584:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var t=r(87462),a=(r(67294),r(3905));const o={},c=void 0,u={unversionedId:"web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u9ad8\u7ea7/reduce",id:"web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u9ad8\u7ea7/reduce",title:"reduce",description:"\u8bed\u6cd5:",source:"@site/docs/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u9ad8\u7ea7/reduce.md",sourceDirName:"web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u9ad8\u7ea7",slug:"/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u9ad8\u7ea7/reduce",permalink:"/docs/next/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u9ad8\u7ea7/reduce",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u9ad8\u7ea7/reduce.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8fd4\u56de\u53ef\u8fed\u4ee3\u5bf9\u8c61",permalink:"/docs/next/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u4e2d\u7ea7/\u8fd4\u56de\u53ef\u8fed\u4ee3\u5bf9\u8c61"},next:{title:"\u6570\u7ec4\u8f6c\u6811",permalink:"/docs/next/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/array/\u6570\u7ec4\u8f6c\u6811"}},p={},i=[],l={toc:i};function s(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8bed\u6cd5:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"1.\u6c42\u548c\nconst sum=(...res)=>res.reduce((a,b)=>a+b,res.length===0 && 0)\neg:\nsum() // >0\nsum(1,2,3) // >6\n\n2.\u4e8c\u7ef4\u6570\u7ec4\u53d8\u4e00\u7ef4\u5316\nlet flattened = [[0, 1], [2, 3], [4, 5]].reduce(( acc, cur ) => acc.concat(cur),[]);\n// > [0, 1, 2, 3, 4, 5]\n\n3.\u7ba1\u9053\u51fd\u6570\nconst pipe=(...fns)=>(init)=>fns.reduce((pre,fn)=>fn(pre),init)\neg:\npipe(x=>x\\*2,x=>x\\*\\*2)(2) // >16\n\n//\u5229\u7528\u4ee3\u7406\u5b9e\u73b0\u94fe\u5f0f\u64cd\u4f5c\nlet pipe = function (value) {\n    let funcStack = [];\n    let oproxy = new Proxy({} , {\n        get : function (pipeObject, fnName) {\n                if (fnName === 'get') {\n                    return funcStack.reduce(function (val, fn) {\n                        return fn(val);\n                    },value);\n                }\n                funcStack.push(window[fnName]);\n                return oproxy;\n            }\n        });\n    return oproxy;\n}\n\nvar double = n => n * 2;\nvar pow = n => n * n;\nvar reverseInt = n => n.toString().split(\"\").reverse().join(\"\") | 0;\n\npipe(3).double.pow.reverseInt.get; // 63\n\n4.\u7edf\u8ba1\u6570\u7ec4\u91cd\u590d\u5143\u7d20\u4e2a\u6570\nconst nums = [1, 2, 3, 3, 2,4,5,4,3];\nlet count=nums.reduce((pre,num)=>{\npre[num]=(pre[num] || 0)+1\nreturn pre\n},{})\n// >{1: 1, 2: 2, 3: 3, 4: 2, 5: 1}\n\n5.\u6309\u5c5e\u6027\u5206\u7ec4\u5bf9\u8c61\nlet people = [\n    { name: 'Alice', age: 21 },\n    { name: 'Max', age: 20 },\n    { name: 'Jane', age: 20 }\n];\nfunction groupBy(objectArray, property) {\n    return objectArray.reduce( (acc, obj)=> {\n        let key = obj[property];\n        if (!acc[key]) {\n            acc[key] = [];\n        }\n        acc[key].push(obj);\n        return acc;\n    }, {});\n}\nlet groupedPeople = groupBy(people, 'age');\n// {\n// 20: [\n// { name: 'Max', age: 20 },\n// { name: 'Jane', age: 20 }\n// ],\n// 21: [{ name: 'Alice', age: 21 }]\n// }\n")))}s.isMDXComponent=!0}}]);