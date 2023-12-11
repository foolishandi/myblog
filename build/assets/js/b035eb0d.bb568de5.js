"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return n?o.createElement(m,l(l({ref:t},s),{},{components:n})):o.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},57179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={},l=void 0,i={unversionedId:"web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/mutationObserver",id:"web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/mutationObserver",title:"mutationObserver",description:"MutationObserver \u7528\u6765\u76d1\u89c6 DOM \u53d8\u52a8\u3002DOM \u7684\u4efb\u4f55\u53d8\u52a8\uff0c\u6bd4\u5982\u8282\u70b9\u7684\u589e\u51cf\u3001\u5c5e\u6027\u7684\u53d8\u52a8\u3001\u6587\u672c\u5185\u5bb9\u7684\u53d8\u52a8\u90fd\u4f1a\u89e6\u53d1 MutationObserver \u4e8b\u4ef6\u3002",source:"@site/docs/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/mutationObserver.md",sourceDirName:"web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6",slug:"/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/mutationObserver",permalink:"/docs/next/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/mutationObserver",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/mutationObserver.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"intl",permalink:"/docs/next/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/intl"},next:{title:"\u6a21\u677f\u5b57\u7b26\u4e32",permalink:"/docs/next/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/\u6a21\u677f\u5b57\u7b26\u4e32"}},c={},u=[{value:"1.observe",id:"1observe",level:2},{value:"2.disconnect()",id:"2disconnect",level:2},{value:"3.takeRecords()",id:"3takerecords",level:2},{value:"4.MutationRecord",id:"4mutationrecord",level:2},{value:"4.1 \u793a\u4f8b 1",id:"41-\u793a\u4f8b-1",level:3},{value:"4.2 \u793a\u4f8b 2",id:"42-\u793a\u4f8b-2",level:3},{value:"5.\u62d3\u5c55",id:"5\u62d3\u5c55",level:2},{value:"1\uff09<code>ResizeObserver</code> : <code>mutatObserver</code>\u7684\u5c01\u88c5",id:"1resizeobserver--mutatobserver\u7684\u5c01\u88c5",level:3}],s={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(46130).Z,width:"444",height:"290"})),(0,r.kt)("admonition",{title:"\u65b9\u6cd5\u4ecb\u7ecd",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"MutationObserver")," \u7528\u6765\u76d1\u89c6 DOM \u53d8\u52a8\u3002DOM \u7684\u4efb\u4f55\u53d8\u52a8\uff0c\u6bd4\u5982\u8282\u70b9\u7684\u589e\u51cf\u3001\u5c5e\u6027\u7684\u53d8\u52a8\u3001\u6587\u672c\u5185\u5bb9\u7684\u53d8\u52a8\u90fd\u4f1a\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"p"},"MutationObserver")," \u4e8b\u4ef6\u3002\n\u4f46\u662f\uff0c\u5b83\u4e0e\u4e8b\u4ef6\u6709\u4e00\u4e2a\u672c\u8d28\u4e0d\u540c\uff1a\u4e8b\u4ef6\u662f\u540c\u6b65\u89e6\u53d1\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0cDOM \u7684\u53d8\u52a8\u7acb\u523b\u4f1a\u89e6\u53d1\u76f8\u5e94\u7684\u4e8b\u4ef6\uff1b\n",(0,r.kt)("inlineCode",{parentName:"p"},"Mutation Observer")," \u5219\u662f\u5f02\u6b65\u89e6\u53d1\uff0cDOM \u7684\u53d8\u52a8\u5e76\u4e0d\u4f1a\u9a6c\u4e0a\u89e6\u53d1\uff0c\u800c\u662f\u8981\u7b49\u5230\u5f53\u524d\u6240\u6709 DOM \u64cd\u4f5c\u90fd\u7ed3\u675f\u624d\u89e6\u53d1\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Mutation Observer")," \u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,r.kt)("p",{parentName:"admonition"},"\u5b83\u7b49\u5f85\u6240\u6709\u811a\u672c\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u624d\u4f1a\u8fd0\u884c\uff08\u5373\u5f02\u6b65\u89e6\u53d1\u65b9\u5f0f\uff09\u3002\n\u5b83\u628a DOM \u53d8\u52a8\u8bb0\u5f55\u5c01\u88c5\u6210\u4e00\u4e2a\u6570\u7ec4\u8fdb\u884c\u5904\u7406\uff0c\u800c\u4e0d\u662f\u4e00\u6761\u6761\u4e2a\u522b\u5904\u7406 DOM \u53d8\u52a8\u3002\n\u5b83\u65e2\u53ef\u4ee5\u89c2\u5bdf DOM \u7684\u6240\u6709\u7c7b\u578b\u53d8\u52a8\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u53ea\u89c2\u5bdf\u67d0\u4e00\u7c7b\u53d8\u52a8\u3002")),(0,r.kt)("h2",{id:"1observe"},"1.observe"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e00\u4e2a\u8282\u70b9\u6dfb\u52a0\u89c2\u5bdf\u5668\uff0c\u5c31\u50cf\u4f7f\u7528 addEventListener \u65b9\u6cd5\u4e00\u6837\uff0c\u591a\u6b21\u6dfb\u52a0\u540c\u4e00\u4e2a\u89c2\u5bdf\u5668\u662f\u65e0\u6548\u7684\uff0c\u56de\u8c03\u51fd\u6570\u4f9d\u7136\u53ea\u4f1a\u89e6\u53d1\u4e00\u6b21\u3002\u4f46\u662f\uff0c\u5982\u679c\u6307\u5b9a\u4e0d\u540c\u7684 options \u5bf9\u8c61\uff0c\u5c31\u4f1a\u88ab\u5f53\u4f5c\u4e24\u4e2a\u4e0d\u540c\u7684\u89c2\u5bdf\u5668\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"observe(target, config)\uff1a"),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"target\uff1a\u9700\u8981\u76d1\u542c\u7684\u5143\u7d20 ","[element]")),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"config\uff1a\u9700\u8981\u76d1\u542c\u7684\u5c5e\u6027 ","[Object]"),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"childList\uff1a\u5b50\u8282\u70b9\u7684\u53d8\u52a8\uff08\u6307\u65b0\u589e\uff0c\u5220\u9664\u6216\u8005\u66f4\u6539\uff09\u3002")))),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"attributes\uff1a\u5c5e\u6027\u7684\u53d8\u52a8\u3002")))),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"characterData\uff1a\u8282\u70b9\u5185\u5bb9\u6216\u8282\u70b9\u6587\u672c\u7684\u53d8\u52a8\u3002")))),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"subtree\uff1a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u662f\u5426\u5c06\u8be5\u89c2\u5bdf\u5668\u5e94\u7528\u4e8e\u8be5\u8282\u70b9\u7684\u6240\u6709\u540e\u4ee3\u8282\u70b9\u3002")))),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"attributeOldValue\uff1a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u89c2\u5bdf attributes \u53d8\u52a8\u65f6\uff0c\u662f\u5426\u9700\u8981\u8bb0\u5f55\u53d8\u52a8\u524d\u7684\u5c5e\u6027\u503c\u3002")))),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"characterDataOldValue\uff1a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u89c2\u5bdf characterData \u53d8\u52a8\u65f6\uff0c\u662f\u5426\u9700\u8981\u8bb0\u5f55\u53d8\u52a8\u524d\u7684\u503c\u3002")))),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"attributeFilter\uff1a\u6570\u7ec4\uff0c\u8868\u793a\u9700\u8981\u89c2\u5bdf\u7684\u7279\u5b9a\u5c5e\u6027\uff08\u6bd4\u5982","[\u2018class\u2019,\u2018src\u2019]","\uff09\u3002"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u5f00\u59cb\u76d1\u542c\u6587\u6863\u6839\u8282\u70b9\uff08\u5373<html>\u6807\u7b7e\uff09\u7684\u53d8\u52a8\nmutationObserver.observe(document.documentElement, {\n  attributes: true,\n  characterData: true,\n  childList: true,\n  subtree: true,\n  attributeOldValue: true,\n  characterDataOldValue: true,\n});\n")),(0,r.kt)("h2",{id:"2disconnect"},"2.disconnect()"),(0,r.kt)("p",null,"disconnect \u65b9\u6cd5\u7528\u6765\u505c\u6b62\u89c2\u5bdf\u3002\u8c03\u7528\u8be5\u65b9\u6cd5\u540e\uff0cDOM \u518d\u53d1\u751f\u53d8\u52a8\uff0c\u4e5f\u4e0d\u4f1a\u89e6\u53d1\u89c2\u5bdf\u5668\u3002"),(0,r.kt)("h2",{id:"3takerecords"},"3.takeRecords()"),(0,r.kt)("p",null,"\u7528\u6765\u6e05\u9664\u53d8\u52a8\u8bb0\u5f55\uff0c\u5373\u4e0d\u518d\u5904\u7406\u672a\u5904\u7406\u7684\u53d8\u52a8\u3002\u8be5\u65b9\u6cd5\u8fd4\u56de\u53d8\u52a8\u8bb0\u5f55\u7684\u6570\u7ec4\u3002"),(0,r.kt)("h2",{id:"4mutationrecord"},"4.MutationRecord"),(0,r.kt)("p",null,"\u542b\u4e49:\u8fd4\u56de\u7684\u53d8\u52a8\u8bb0\u5f55"),(0,r.kt)("p",null,"DOM \u6bcf\u6b21\u53d1\u751f\u53d8\u5316\uff0c\u5c31\u4f1a\u751f\u6210\u4e00\u6761\u53d8\u52a8\u8bb0\u5f55\uff08MutationRecord \u5b9e\u4f8b\uff09\u3002\u8be5\u5b9e\u4f8b\u5305\u542b\u4e86\u4e0e\u53d8\u52a8\u76f8\u5173\u7684\u6240\u6709\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"Mutation Observer \u5904\u7406\u7684\u5c31\u662f\u4e00\u4e2a\u4e2a MutationRecord \u5b9e\u4f8b\u6240\u7ec4\u6210\u7684\u6570\u7ec4\u3002"),(0,r.kt)("p",null,"MutationRecord \u5bf9\u8c61\u5305\u542b\u4e86 DOM \u7684\u76f8\u5173\u4fe1\u606f\uff0c\u6709\u5982\u4e0b\u5c5e\u6027:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"type\uff1a\u89c2\u5bdf\u7684\u53d8\u52a8\u7c7b\u578b\uff08attribute\u3001characterData \u6216\u8005 childList\uff09\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"target\uff1a\u53d1\u751f\u53d8\u52a8\u7684 DOM \u8282\u70b9\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"addedNodes\uff1a\u65b0\u589e\u7684 DOM \u8282\u70b9\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"removedNodes\uff1a\u5220\u9664\u7684 DOM \u8282\u70b9\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"previousSibling\uff1a\u524d\u4e00\u4e2a\u540c\u7ea7\u8282\u70b9\uff0c\u5982\u679c\u6ca1\u6709\u5219\u8fd4\u56de null\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"nextSibling\uff1a\u4e0b\u4e00\u4e2a\u540c\u7ea7\u8282\u70b9\uff0c\u5982\u679c\u6ca1\u6709\u5219\u8fd4\u56de null\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"attributeName\uff1a\u53d1\u751f\u53d8\u52a8\u7684\u5c5e\u6027\u3002\u5982\u679c\u8bbe\u7f6e\u4e86 attributeFilter\uff0c\u5219\u53ea\u8fd4\u56de\u9884\u5148\u6307\u5b9a\u7684\u5c5e\u6027\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"oldValue\uff1a\u53d8\u52a8\u524d\u7684\u503c\u3002\u8fd9\u4e2a\u5c5e\u6027\u53ea\u5bf9 attribute \u548c characterData \u53d8\u52a8\u6709\u6548\uff0c\u5982\u679c\u53d1\u751f childList \u53d8\u52a8\uff0c\u5219\u8fd4\u56de null\u3002")),(0,r.kt)("h3",{id:"41-\u793a\u4f8b-1"},"4.1 \u793a\u4f8b 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div id="container">\n  <div class="child"></div>\n</div>\n<button id="update">\u6539\u53d8</button>\n<script>\n  let MutationObserver =\n    window.MutationObserver ||\n    window.WebKitMutationObserver ||\n    window.MozMutationObserver;\n  const container = document.getElementById("container");\n  const button = document.getElementById("update");\n  const options = {\n    attributes: true,\n    childList: true,\n  };\n  // \u521b\u5efaMutationObserver\u5b9e\u4f8b\uff0c\u8fd4\u56de\u4e00\u4e2a\u89c2\u5bdf\u8005\u5bf9\u8c61\n  const mutation = new MutationObserver(function (mutationRecoards, observer) {\n    console.log(mutationRecoards);\n    console.log(observer);\n  });\n  // \u5bf9\u89c2\u5bdf\u8005\u6dfb\u52a0\u9700\u8981\u89c2\u5bdf\u7684\u5143\u7d20\uff0c\u5e76\u8bbe\u7f6e\u9700\u8981\u89c2\u5bdf\u5143\u7d20\u7684\u54ea\u4e9b\u65b9\u9762\n  mutation.observe(container, options);\n\n  // \u5bf9container\u8fdb\u884c\u64cd\u4f5c\n  button.addEventListener("click", function () {\n    container.innerText = "\u8fd9\u662f\u6587\u672c"; // \u5185\u5bb9\u6539\u53d8\n    container.style.background = "red"; // \u5c5e\u6027\u6539\u53d8\n    for (let i = 0; i < 3; i++) {\n      // \u5b50\u8282\u70b9\n      container.appendChild(document.createElement("div"));\n    }\n  });\n<\/script>\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(43731).Z,width:"705",height:"716"})),(0,r.kt)("h3",{id:"42-\u793a\u4f8b-2"},"4.2 \u793a\u4f8b 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'useEffect(() => {\n    // \u9009\u62e9\u9700\u8981\u89c2\u5bdf\u53d8\u52a8\u7684\u8282\u70b9\n    const targetNode = document.getElementsByClassName(\n      "fc-view-harness fc-view-harness-active"\n    )[0];\n\n    // \u89c2\u5bdf\u5668\u7684\u914d\u7f6e\uff08\u9700\u8981\u89c2\u5bdf\u4ec0\u4e48\u53d8\u52a8\uff09\n    const config = { childList: true };\n\n    // \u5f53\u89c2\u5bdf\u5230\u53d8\u52a8\u65f6\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570\n    const callback = function (mutationsList: any, observer: any) {\n      // Use traditional \'for loops\' for IE 11\n      for (let mutation of mutationsList) {\n        if (mutation.type === "childList") {\n          const addEle = mutation.addedNodes[0] as HTMLElement;\n          if (addEle && addEle.classList.contains("fc-popover")) {\n            const date = addEle.getAttribute("data-date");\n            const parentEle = document.querySelector(\n              `td[data-date="${date}"]`\n            ) as HTMLElement;\n            addEle.style.top = "0";\n            addEle.style.left = "0";\n            parentEle.style.position = "relative";\n            parentEle?.appendChild(addEle);\n          }\n        }\n      }\n    };\n\n    // \u521b\u5efa\u4e00\u4e2a\u89c2\u5bdf\u5668\u5b9e\u4f8b\u5e76\u4f20\u5165\u56de\u8c03\u51fd\u6570\n    const observer = new MutationObserver(callback);\n\n    // \u4ee5\u4e0a\u8ff0\u914d\u7f6e\u5f00\u59cb\u89c2\u5bdf\u76ee\u6807\u8282\u70b9\n    observer.observe(targetNode, config);\n\n    return () => {\n      // \u4e4b\u540e\uff0c\u53ef\u505c\u6b62\u89c2\u5bdf\n      observer.disconnect();\n    };\n  }, []);\n\n')),(0,r.kt)("h2",{id:"5\u62d3\u5c55"},"5.\u62d3\u5c55"),(0,r.kt)("h3",{id:"1resizeobserver--mutatobserver\u7684\u5c01\u88c5"},"1\uff09",(0,r.kt)("inlineCode",{parentName:"h3"},"ResizeObserver")," : ",(0,r.kt)("inlineCode",{parentName:"h3"},"mutatObserver"),"\u7684\u5c01\u88c5"),(0,r.kt)("p",null,"\u6709\u4e00\u5b9a\u517c\u5bb9\u6027(\u8c37\u6b4c 64+\uff0c\u4f46\u662f\u6d4f\u89c8\u5668\u652f\u6301\u4e0d\u662f\u5f88\u597d)\uff0c\u53ef\u4ee5\u5b89\u88c5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"npm i resize-observer-polyfill\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import ResizeObserver from "resize-observer-polyfill";\n\nconst ro = new ResizeObserver((entries, observer) => {\n  for (const entry of entries) {\n    console.log("\u88ab\u76d1\u542c\u5143\u7d20content\u7684\u5bbd\u9ad8\u53ca\u4f4d\u7f6e", entry.contentRect);\n    // bottom: 700 \u6307top + height\u7684\u503c\n    // height: 600 \u6307\u5143\u7d20\u672c\u8eab\u7684\u9ad8\u5ea6\uff0c\u4e0d\u5305\u542bpadding\uff0cborder\u503c\n    // left: 100 \u6307padding-left\u7684\u503c\n    // right: 1143 \u6307left + width\u7684\u503c\n    // top: 100 \u6307padidng-top\u7684\u503c\n    // width: 1043  \u6307\u5143\u7d20\u672c\u8eab\u7684\u5bbd\u5ea6\uff0c\u4e0d\u5305\u542bpadding\uff0cborder\u503c\n    // x: 100\n    // y: 100\n    console.log("\u88ab\u76d1\u542c\u5143\u7d20\u7684\u5bbd\u9ad8", entry.borderBoxSize);\n    // blockSize: 1000\n    // inlineSize: 1443\n    console.log("\u88ab\u76d1\u542c\u5143\u7d20content\u90e8\u5206\u7684\u5bbd\u9ad8", entry.contentBoxSize);\n    // blockSize: 600\n    // inlineSize: 1043\n    console.log("\u88ab\u76d1\u542c\u5143\u7d20", entry.target);\n  }\n});\n\nro.observe(document.body);\n')),(0,r.kt)("admonition",{title:"\u57fa\u672c\u4ecb\u7ecd",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"ResizeObserver.disconnect()"),"\n\u53d6\u6d88\u548c\u7ed3\u675f\u76ee\u6807\u5bf9\u8c61\u4e0a\u6240\u6709\u5bf9 Element \u6216 SVGElement \u89c2\u5bdf\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"ResizeObserver.observe()"),"\n\u5f00\u59cb\u89c2\u5bdf\u6307\u5b9a\u7684 Element \u6216 SVGElement\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"ResizeObserver.unobserve()"),"\n\u7ed3\u675f\u89c2\u5bdf\u6307\u5b9a\u7684 Element \u6216 SVGElement\u3002")),(0,r.kt)("admonition",{title:"\u8bed\u6cd5",type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const resizeObserver = new ResizeObserver((entries) => {\n  for (let entry of entries) {\n    // \u505a\u4e00\u4e9b\u4e8b\u60c5\n  }\n});\n"))),(0,r.kt)("admonition",{title:"\u8282\u6d41\u4f18\u5316",type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const throttle = \uff08fun,delay\uff09 => {\n    let timer = null;\n    return function() {\n        const args = arguments\n        if(!timer) {\n            timer = setTimeout(() => {\n                timer = null\n            }, delay)\n            fun(args )\n        }\n    }\n}\n\nconst myObserver = new ResizeObserver(throttle(entries => {\n  entries.forEach(entry => {\n    console.log('\u5927\u5c0f\u4f4d\u7f6e contentRect', entry.contentRect)\n    console.log('\u76d1\u542c\u7684DOM target', entry.target)\n  })\n}), 500)\n\nmyObserver.observe(document.body)\n\n"))))}p.isMDXComponent=!0},46130:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/jt-4460608af286fb89a2601aae7b4cca93.png"},43731:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/mutation-cf69b9721c0662c2af5f0174c3f822a2.png"}}]);