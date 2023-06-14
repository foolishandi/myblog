"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},19726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},s=void 0,i={unversionedId:"\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useFetch",id:"\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useFetch",title:"useFetch",description:"\u83b7\u53d6\u6570\u636e",source:"@site/docs/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useFetch.mdx",sourceDirName:"\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook",slug:"/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useFetch",permalink:"/docs/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useFetch",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useFetch.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useEventListener",permalink:"/docs/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useEventListener"},next:{title:"useLocalStorage",permalink:"/docs/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useLocalStorage"}},c={},l=[{value:"1.\u5b9e\u73b0",id:"1\u5b9e\u73b0",level:2},{value:"2.\u4f7f\u7528",id:"2\u4f7f\u7528",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u83b7\u53d6\u6570\u636e")),(0,o.kt)("h2",{id:"1\u5b9e\u73b0"},"1.\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useState, useEffect } from "react";\n\nconst useFetch = (url = "", options = null) => {\n  const [data, setData] = useState(null);\n  const [error, setError] = useState(null);\n  const [loading, setLoading] = useState(false);\n\n  useEffect(() => {\n    let isMounted = true;\n\n    setLoading(true);\n\n    fetch(url, options)\n      .then((res) => res.json())\n      .then((data) => {\n        if (isMounted) {\n          setData(data);\n          setError(null);\n        }\n      })\n      .catch((error) => {\n        if (isMounted) {\n          setError(error);\n          setData(null);\n        }\n      })\n      .finally(() => isMounted && setLoading(false));\n\n    return () => (isMounted = false);\n  }, [url, options]);\n\n  return { loading, error, data };\n};\n\nexport default useFetch;\n')),(0,o.kt)("h2",{id:"2\u4f7f\u7528"},"2.\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import useFetch from "./useFetch";\n\nconst App = () => {\n  const {\n    loading,\n    error,\n    data = [],\n  } = useFetch("https://hn.algolia.com/api/v1/search?query=react");\n\n  if (error) return <p>Error!</p>;\n  if (loading) return <p>Loading...</p>;\n\n  return (\n    <div>\n      <ul>\n        {data?.hits?.map((item) => (\n          <li key={item.objectID}>\n            <a href={item.url}>{item.title}</a>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n};\n')))}p.isMDXComponent=!0}}]);