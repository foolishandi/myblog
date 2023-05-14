"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2536],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(m,".").concat(d)]||s[d]||u[d]||o;return n?r.createElement(f,c(c({ref:t},i),{},{components:n})):r.createElement(f,c({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},c=void 0,l={unversionedId:"intro/npm/\u6587\u4ef6\u5904\u7406",id:"intro/npm/\u6587\u4ef6\u5904\u7406",title:"\u6587\u4ef6\u5904\u7406",description:"1.PDF",source:"@site/docs/intro/npm/\u6587\u4ef6\u5904\u7406.md",sourceDirName:"intro/npm",slug:"/intro/npm/\u6587\u4ef6\u5904\u7406",permalink:"/docs/intro/npm/\u6587\u4ef6\u5904\u7406",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/intro/npm/\u6587\u4ef6\u5904\u7406.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u54cd\u5e94\u5f0f\u5e03\u5c40\u76f8\u5173",permalink:"/docs/intro/npm/\u54cd\u5e94\u5f0f\u5e03\u5c40\u76f8\u5173"},next:{title:"\u6a21\u62df\u6570\u636e",permalink:"/docs/intro/npm/\u6a21\u62df\u6570\u636e"}},m={},p=[{value:"1.PDF",id:"1pdf",level:2},{value:"React-PDF",id:"react-pdf",level:3},{value:"2.MD",id:"2md",level:2},{value:"react-markdown",id:"react-markdown",level:3},{value:"excel",id:"excel",level:2},{value:"exceljs",id:"exceljs",level:3}],i={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1pdf"},"1.PDF"),(0,a.kt)("h3",{id:"react-pdf"},(0,a.kt)("a",{parentName:"h3",href:"https://www.npmjs.com/package/react-pdf"},"React-PDF")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { Document, Page } from 'react-pdf';\n// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';\nfunction MyApp() {\n  const [numPages, setNumPages] = useState(null);\n  const [pageNumber, setPageNumber] = useState(1);\n\n  function onDocumentLoadSuccess({ numPages }) {\n    setNumPages(numPages);\n  }\n\n  return (\n    <div>\n      <Document file=\"somefile.pdf\" onLoadSuccess={onDocumentLoadSuccess}>\n        <Page pageNumber={pageNumber} />\n      </Document>\n      <p>\n        Page {pageNumber} of {numPages}\n      </p>\n    </div>\n  );\n}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"React version"),(0,a.kt)("th",{parentName:"tr",align:null},"Newest compatible React-PDF version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u226516.8"),(0,a.kt)("td",{parentName:"tr",align:null},"latest")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u226516.3"),(0,a.kt)("td",{parentName:"tr",align:null},"5.x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u226515.5"),(0,a.kt)("td",{parentName:"tr",align:null},"4.x")))),(0,a.kt)("h2",{id:"2md"},"2.MD"),(0,a.kt)("h3",{id:"react-markdown"},(0,a.kt)("a",{parentName:"h3",href:"https://www.npmjs.com/package/react-markdown"},"react-markdown")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport ReactMarkdown from 'react-markdown'\nimport ReactDom from 'react-dom'\nimport remarkGfm from 'remark-gfm'\n\nconst markdown = `A paragraph with *emphasis* and **strong importance**.\n\n> A block quote with ~strikethrough~ and a URL: https://reactjs.org.\n\n* Lists\n* [ ] todo\n* [x] done\n\nA table:\n\n| a | b |\n| - | - |\n`\n\nReactDom.render(\n  <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />,\n  document.body\n)\n")),(0,a.kt)("h2",{id:"excel"},"excel"),(0,a.kt)("h3",{id:"exceljs"},(0,a.kt)("a",{parentName:"h3",href:"https://www.npmjs.com/package/exceljs"},"exceljs")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.npmdoc.org/exceljszhongwenwendangexceljs-jszhongwenjiaochengjiexi.html"},"\u4e2d\u6587\u6587\u6863")))}s.isMDXComponent=!0}}]);