"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7641],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),y=o,m=s["".concat(c,".").concat(y)]||s[y]||f[y]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},29183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=r(97960);const i={},l=void 0,c={unversionedId:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/jquery/\u76ee\u5f55",id:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/jquery/\u76ee\u5f55",title:"\u76ee\u5f55",description:"",source:"@site/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/jquery/\u76ee\u5f55.md",sourceDirName:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/jquery",slug:"/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/jquery/\u76ee\u5f55",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/jquery/\u76ee\u5f55",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/jquery/\u76ee\u5f55.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/jquery/"},next:{title:"bootstrap",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/bootstrap/"}},u={},p=[],s={toc:p};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"jquery \u81ea\u5b9a\u4e49\u5de5\u5177\u6a21\u677f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'(function ($) {\n  $.fn.highLight = function (options) {\n    var defaults = { color: "red", "background-color": "yellow" };\n    var opts = $.extend(defaults, options);\n    $(this).css(opts);\n  };\n})(jQuery);\nimport { Button } from "antd";\n\n\xb7\xb7\xb7\n $("#myDiv").highLight({ color: "#fff" });\n\xb7\xb7\xb7\n')),(0,o.kt)(a.Z,{type:"link",href:"/html/jquery/toolFn.html",target:"_blank",mdxType:"Button"},"\u89c1\u9875\u9762\u6d4b\u8bd5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"cssTip")),(0,o.kt)(a.Z,{type:"link",href:"/html/cssTip/cssTip.html",target:"_blank",mdxType:"Button"},"\u89c1\u9875\u9762\u6d4b\u8bd5"))}f.isMDXComponent=!0}}]);