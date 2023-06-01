"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6082],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54199:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,p={unversionedId:"intro/npm/\u54cd\u5e94\u5f0f\u5e03\u5c40\u76f8\u5173",id:"intro/npm/\u54cd\u5e94\u5f0f\u5e03\u5c40\u76f8\u5173",title:"\u54cd\u5e94\u5f0f\u5e03\u5c40\u76f8\u5173",description:"1. react-responsive",source:"@site/docs/intro/npm/\u54cd\u5e94\u5f0f\u5e03\u5c40\u76f8\u5173.md",sourceDirName:"intro/npm",slug:"/intro/npm/\u54cd\u5e94\u5f0f\u5e03\u5c40\u76f8\u5173",permalink:"/docs/intro/npm/\u54cd\u5e94\u5f0f\u5e03\u5c40\u76f8\u5173",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/intro/npm/\u54cd\u5e94\u5f0f\u5e03\u5c40\u76f8\u5173.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5143\u7d20\u4ea4\u4e92",permalink:"/docs/intro/npm/\u5143\u7d20\u4ea4\u4e92"},next:{title:"\u6587\u4ef6\u5904\u7406",permalink:"/docs/intro/npm/\u6587\u4ef6\u5904\u7406"}},l={},s=[{value:"1. react-responsive",id:"1-react-responsive",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-react-responsive"},"1. ",(0,a.kt)("a",{parentName:"h2",href:"https://www.npmjs.com/package/react-responsive"},"react-responsive")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"npm install react-responsive --save\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { useMediaQuery } from "react-responsive";\n\nconst Example = () => {\n  const isDesktopOrLaptop = useMediaQuery({\n    query: "(min-width: 1224px)",\n  });\n  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });\n  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });\n  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });\n  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });\n\n  return (\n    <div>\n      <h1>Device Test!</h1>\n      {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}\n      {isBigScreen && <p>You have a huge screen</p>}\n      {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}\n      <p>Your are in {isPortrait ? "portrait" : "landscape"} orientation</p>\n      {isRetina && <p>You are retina</p>}\n    </div>\n  );\n};\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Chrome"),(0,a.kt)("th",{parentName:"tr",align:null},"9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Firefox"),(0,a.kt)("td",{parentName:"tr",align:null},"(Gecko) 6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MS Edge"),(0,a.kt)("td",{parentName:"tr",align:null},"All")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Internet Explorer"),(0,a.kt)("td",{parentName:"tr",align:null},"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Opera"),(0,a.kt)("td",{parentName:"tr",align:null},"12.1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Safari"),(0,a.kt)("td",{parentName:"tr",align:null},"5.1")))))}u.isMDXComponent=!0}}]);