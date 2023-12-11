"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,s={unversionedId:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useMediaQuery",id:"version-1.0/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useMediaQuery",title:"useMediaQuery",description:"\u5728\u529f\u80fd\u7ec4\u4ef6\u4e2d\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u6d4b\u8bd5\u548c\u76d1\u63a7\u5a92\u4f53\u67e5\u8be2",source:"@site/versioned_docs/version-1.0/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useMediaQuery.mdx",sourceDirName:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook",slug:"/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useMediaQuery",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useMediaQuery",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/versioned_docs/version-1.0/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useMediaQuery.mdx",tags:[],version:"1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useLocalStorage",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useLocalStorage"},next:{title:"useOnceRender",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useOnceRender"}},u={},l=[{value:"1.\u5b9e\u73b0",id:"1\u5b9e\u73b0",level:2},{value:"2.\u4f7f\u7528",id:"2\u4f7f\u7528",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u5728\u529f\u80fd\u7ec4\u4ef6\u4e2d\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u6d4b\u8bd5\u548c\u76d1\u63a7\u5a92\u4f53\u67e5\u8be2")),(0,o.kt)("h2",{id:"1\u5b9e\u73b0"},"1.\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState, useCallback, useEffect } from 'react';\n\nconst useMediaQuery = (queries = [], values = [], defaultValue) => {\n  const mediaQueryList = queries.map(q => window.matchMedia(q));\n\n  const getValue = useCallback(() => {\n    const index = mediaQueryList.findIndex(mql => mql.matches);\n    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;\n  }, [mediaQueryList, values, defaultValue]);\n\n  const [value, setValue] = useState(getValue);\n\n  useEffect(() => {\n    const handler = () => setValue(getValue);\n    mediaQueryList.forEach(mql => mql.addEventListener('change', handler));\n\n    return () =>\n      mediaQueryList.forEach(mql => mql.removeEventListener('change', handler));\n  }, [getValue, mediaQueryList]);\n\n  return value;\n};\n\nexport default useMediaQuery;\n\n")),(0,o.kt)("h2",{id:"2\u4f7f\u7528"},"2.\u4f7f\u7528"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6dfb\u52a0\u4e00\u4e2a\u5a92\u4f53\u67e5\u8be2\u6765\u68c0\u67e5\u8bbe\u5907\u662f\u5426\u5141\u8bb8\u7528\u6237\u60ac\u505c\u5728\u5143\u7d20\u4e0a\u3002\u8fd9\u6837\uff0c\u5982\u679c\u7528\u6237\u53ef\u4ee5\u60ac\u505c\u6216\u5e94\u7528\u57fa\u672c\u6837\u5f0f\uff0c\u5c31\u53ef\u4ee5\u6dfb\u52a0\u7279\u5b9a\u7684\u4e0d\u900f\u660e\u6837\u5f0f\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useMediaQuery } from "./hooks";\n\nfunction App() {\n  const canHover = useMediaQuery(\n    // Media queries\n    ["(hover: hover)"],\n    // Values corresponding to the above media queries by array index\n    [true],\n    // Default value\n    false\n  );\n\n  const canHoverClass = "opacity-0 hover:opacity-100 transition-opacity";\n  const defaultClass = "opacity-100";\n\n  return (\n    <div className={canHover ? canHoverClass : defaultClass}>Hover me!</div>\n  );\n}\n\nexport default App;\n')))}d.isMDXComponent=!0}}]);