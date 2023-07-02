"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1258],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,b=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(b,c(c({ref:t},u),{},{components:r})):n.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},c=void 0,l={unversionedId:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/react",id:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/react",title:"react",description:"- \u6279\u91cf\u66f4\u65b0\u8868\u5355\u6570\u636estate",source:"@site/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/react.md",sourceDirName:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks",slug:"/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/react",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/react",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/react.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u7ed3\u6784",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/dva/\u57fa\u672c\u7ed3\u6784"},next:{title:"useEffect",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5b98\u65b9hook/useEffect"}},i={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6279\u91cf\u66f4\u65b0\u8868\u5355\u6570\u636estate")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},' const [value, setValue] = useState({\n    name: "",\n    email: "",\n    psw: "",\n  });\n  const handleChange = (e) => {\n    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));\n  };\n\n  ...\n  <Input name="name" value={value.name} onChange={handleChange}></Input>\n  \xb7\xb7\xb7\n')),(0,a.kt)("blockquote",null,(0,a.kt)("a",{href:"/react/formBatchUpdate",target:"_blank"},"\u70b9\u51fb\u6b64\u5904\u89c1\u6d4b\u8bd5\u9875\u9762")))}p.isMDXComponent=!0}}]);