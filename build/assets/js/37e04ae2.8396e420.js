"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1891],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(r),f=o,m=l["".concat(s,".").concat(f)]||l[f]||d[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={},c=void 0,i={unversionedId:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useOnceRender",id:"version-1.0/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useOnceRender",title:"useOnceRender",description:"\u53ea\u6e32\u67d3\u4e00\u6b21\u9875\u9762",source:"@site/versioned_docs/version-1.0/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useOnceRender.mdx",sourceDirName:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook",slug:"/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useOnceRender",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useOnceRender",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/versioned_docs/version-1.0/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useOnceRender.mdx",tags:[],version:"1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useMediaQuery",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useMediaQuery"},next:{title:"usePageSize",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/usePageSize"}},s={},u=[{value:"1.\u5b9e\u73b0",id:"1\u5b9e\u73b0",level:2}],p={toc:u};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u53ea\u6e32\u67d3\u4e00\u6b21\u9875\u9762")),(0,o.kt)("h2",{id:"1\u5b9e\u73b0"},"1.\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useState, useEffect } from "react";\nconst useOnceRender = (param) => {\n  const [state, setState] = useState(param);\n  useEffect(() => {\n    setState(!param);\n  }, []);\n  return state;\n};\n')))}l.isMDXComponent=!0}}]);