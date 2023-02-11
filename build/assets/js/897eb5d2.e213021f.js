"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8258],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},242:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},c=void 0,l={unversionedId:"\u9879\u76ee\u5b9e\u8df5/\u9879\u76ee\u5c0f\u5b9e\u4f8b/react",id:"\u9879\u76ee\u5b9e\u8df5/\u9879\u76ee\u5c0f\u5b9e\u4f8b/react",title:"react",description:"- \u6279\u91cf\u66f4\u65b0\u8868\u5355\u6570\u636estate",source:"@site/docs/\u9879\u76ee\u5b9e\u8df5/\u9879\u76ee\u5c0f\u5b9e\u4f8b/react.md",sourceDirName:"\u9879\u76ee\u5b9e\u8df5/\u9879\u76ee\u5c0f\u5b9e\u4f8b",slug:"/\u9879\u76ee\u5b9e\u8df5/\u9879\u76ee\u5c0f\u5b9e\u4f8b/react",permalink:"/docs/\u9879\u76ee\u5b9e\u8df5/\u9879\u76ee\u5c0f\u5b9e\u4f8b/react",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/\u9879\u76ee\u5b9e\u8df5/\u9879\u76ee\u5c0f\u5b9e\u4f8b/react.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"js\u539f\u751f\u76ee\u5f55",permalink:"/docs/\u9879\u76ee\u5b9e\u8df5/\u9879\u76ee\u5c0f\u5b9e\u4f8b/js\u539f\u751f\u76ee\u5f55"},next:{title:"oss",permalink:"/docs/\u4e91\u670d\u52a1/\u963f\u91cc\u4e91/oss"}},i={},u=[],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6279\u91cf\u66f4\u65b0\u8868\u5355\u6570\u636estate")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},' const [value, setValue] = useState({\n    name: "",\n    email: "",\n    psw: "",\n  });\n  const handleChange = (e) => {\n    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));\n  };\n\n  ...\n  <Input name="name" value={value.name} onChange={handleChange}></Input>\n  \xb7\xb7\xb7\n')),(0,a.kt)("blockquote",null,(0,a.kt)("a",{href:"/react/formBatchUpdate",target:"_blank"},"\u70b9\u51fb\u6b64\u5904\u89c1\u6d4b\u8bd5\u9875\u9762")))}p.isMDXComponent=!0}}]);