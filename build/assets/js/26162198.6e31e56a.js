"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},i=void 0,s={unversionedId:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useLocalStorage",id:"version-1.0/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useLocalStorage",title:"useLocalStorage",description:"LocalStorage \u76f8\u5173.",source:"@site/versioned_docs/version-1.0/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useLocalStorage.mdx",sourceDirName:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook",slug:"/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useLocalStorage",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useLocalStorage",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/versioned_docs/version-1.0/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useLocalStorage.mdx",tags:[],version:"1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useFetch",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useFetch"},next:{title:"useMediaQuery",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5e38\u7528\u81ea\u5b9a\u4e49hook/useMediaQuery"}},l={},c=[{value:"1.\u5b9e\u73b0",id:"1\u5b9e\u73b0",level:2},{value:"2.\u4f7f\u7528",id:"2\u4f7f\u7528",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"LocalStorage \u76f8\u5173.")),(0,r.kt)("h2",{id:"1\u5b9e\u73b0"},"1.\u5b9e\u73b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useState } from "react";\n\nconst useLocalStorage = (key = "", initialValue = "") => {\n  const [state, setState] = useState(() => {\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error) {\n      return initialValue;\n    }\n  });\n\n  const setLocalStorageState = (newState) => {\n    try {\n      const newStateValue =\n        typeof newState === "function" ? newState(state) : newState;\n      setState(newStateValue);\n      window.localStorage.setItem(key, JSON.stringify(newStateValue));\n    } catch (error) {\n      console.error(`Unable to store new value for ${key} in localStorage.`);\n    }\n  };\n\n  return [state, setLocalStorageState];\n};\n\nexport default useLocalStorage;\n')),(0,r.kt)("h2",{id:"2\u4f7f\u7528"},"2.\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useLocalStorage } from "./hooks";\n\nconst defaultSettings = {\n  notifications: "weekly",\n};\n\nfunction App() {\n  const [appSettings, setAppSettings] = useLocalStorage(\n    "app-settings",\n    defaultSettings\n  );\n\n  return (\n    <div className="h-full w-full flex flex-col justify-center items-center">\n      <div className="flex items-center mb-8">\n        <p className="font-medium text-lg mr-4">Your application\'s settings:</p>\n\n        <select\n          value={appSettings.notifications}\n          onChange={(e) =>\n            setAppSettings((settings) => ({\n              ...settings,\n              notifications: e.target.value,\n            }))\n          }\n          className="border border-gray-900 rounded py-2 px-4 "\n        >\n          <option value="daily">daily</option>\n          <option value="weekly">weekly</option>\n          <option value="monthly">monthly</option>\n        </select>\n      </div>\n\n      <button\n        onClick={() => setAppSettings(defaultSettings)}\n        className="rounded-md shadow-md py-2 px-6 bg-red-500 text-white uppercase font-medium tracking-wide text-sm leading-8"\n      >\n        Reset settings\n      </button>\n    </div>\n  );\n}\n\nexport default App;\n')))}p.isMDXComponent=!0}}]);