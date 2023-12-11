"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return n?o.createElement(d,c(c({ref:t},p),{},{components:n})):o.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:1},c=void 0,i={unversionedId:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5b98\u65b9hook/useEffect",id:"version-1.0/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5b98\u65b9hook/useEffect",title:"useEffect",description:"useEffect Hook \u770b\u505a componentDidMount\uff0ccomponentDidUpdate \u548c componentWillUnmount \u8fd9\u4e09\u4e2a\u51fd\u6570\u7684\u7ec4\u5408",source:"@site/versioned_docs/version-1.0/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5b98\u65b9hook/useEffect.md",sourceDirName:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5b98\u65b9hook",slug:"/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5b98\u65b9hook/useEffect",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5b98\u65b9hook/useEffect",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/versioned_docs/version-1.0/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5b98\u65b9hook/useEffect.md",tags:[],version:"1.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"react",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/react"},next:{title:"useState",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5b98\u65b9hook/useState"}},s={},l=[{value:"1.\u4f7f\u7528",id:"1\u4f7f\u7528",level:2},{value:"2.useLayoutEffect",id:"2uselayouteffect",level:2},{value:"3.\u5f02\u6b65\u4f7f\u7528async/await",id:"3\u5f02\u6b65\u4f7f\u7528asyncawait",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"useEffect Hook")," \u770b\u505a ",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidMount"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidUpdate")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"componentWillUnmount")," \u8fd9\u4e09\u4e2a\u51fd\u6570\u7684\u7ec4\u5408")),(0,r.kt)("h2",{id:"1\u4f7f\u7528"},"1.\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"useEffect(()=>{\n    // \u9875\u9762\u7ed8\u5236**\u6e32\u67d3\u540e**\u505a\u4e9b\u4e8b\u60c5\uff0c\u6bd4\u5982\u8bf7\u6c42\u7f51\u7edc\uff0c\u64cd\u4f5cdom\n    dosomething()\n    return()=>{\n        // \u76f8\u5f53\u4e8ecomponentWillUnmount\u65f6\u673a\n        dosomething()\n    }\n},[]) //\u4f9d\u8d56\u6570\u7ec4\uff0c\u6839\u636e\u91cc\u9762\u7684\u503c\u8fdb\u884c\u66f4\u65b0\uff0c\u5982\u679c\u6ca1\u6709\u6570\u7ec4\u53c2\u6570\uff0c\u4f1a\u6bcf\u6b21\u66f4\u65b0\uff0c\u53ef\u80fd\u5bfc\u81f4\u6b7b\u5faa\u73af\n\n")),(0,r.kt)("h2",{id:"2uselayouteffect"},"2.useLayoutEffect"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"useLayoutEffect(()=>{\n    // \u5b83\u4f1a\u5728\u6240\u6709\u7684 DOM \u53d8\u66f4\u4e4b\u540e\uff0c\u518d\u540c\u6b65\u8c03\u7528 effect\u3002\n    // \u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u8bfb\u53d6 DOM \u5e03\u5c40\u5e76\u540c\u6b65\u89e6\u53d1\u91cd\u6e32\u67d3\u3002\n    dosomething()\n    return()=>{\n        // \u76f8\u5f53\u4e8ecomponentWillUnmount\u65f6\u673a\n        dosomething()\n    }\n},[]) //\u4f9d\u8d56\u6570\u7ec4\uff0c\u6839\u636e\u91cc\u9762\u7684\u503c\u8fdb\u884c\u66f4\u65b0\uff0c\u5982\u679c\u6ca1\u6709\u6570\u7ec4\u53c2\u6570\uff0c\u4f1a\u6bcf\u6b21\u66f4\u65b0\uff0c\u53ef\u80fd\u5bfc\u81f4\u6b7b\u5faa\u73af\n\n")),(0,r.kt)("h2",{id:"3\u5f02\u6b65\u4f7f\u7528asyncawait"},"3.\u5f02\u6b65\u4f7f\u7528async/await"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4e0d\u80fd\u76f4\u63a5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect(async ()=>{},[])")),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"\u57fa\u672c\u539f\u56e0: ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u7b2c\u4e00\u4e2a\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"(fn)"),"\u9700\u8fd4\u56de\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"\u6e05\u9664\u526f\u4f5c\u7528\u51fd\u6570"),"\uff0c\u4f46\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"async"),"\u7684\u8fd4\u56de\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"promise")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"useEffect(() => {\n    // \u4f7f\u7528IIFE\uff0c\u6216\u8005\u81ea\u5df1\u7528 async fn\u5305\u88c5\u4e00\u4e0b\uff0c\u518d\u6267\u884c\n    (async function anyNameFunction() {\n        await dosomething();\n    })();\n}, []);\n")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"")))}u.isMDXComponent=!0}}]);