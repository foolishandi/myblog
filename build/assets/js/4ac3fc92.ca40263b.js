"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),g=i,f=p["".concat(l,".").concat(g)]||p[g]||m[g]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={},a=void 0,c={unversionedId:"\u9879\u76ee\u5b9e\u8df5/git/\u57fa\u672c",id:"\u9879\u76ee\u5b9e\u8df5/git/\u57fa\u672c",title:"\u57fa\u672c",description:"",source:"@site/docs/\u9879\u76ee\u5b9e\u8df5/git/\u57fa\u672c.md",sourceDirName:"\u9879\u76ee\u5b9e\u8df5/git",slug:"/\u9879\u76ee\u5b9e\u8df5/git/\u57fa\u672c",permalink:"/docs/\u9879\u76ee\u5b9e\u8df5/git/\u57fa\u672c",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/\u9879\u76ee\u5b9e\u8df5/git/\u57fa\u672c.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u6377\u8fdb\u884c\u6ce8\u91ca",permalink:"/docs/\u9879\u76ee\u5b9e\u8df5/vscode/\u63d2\u4ef6/\u5feb\u6377\u8fdb\u884c\u6ce8\u91ca"},next:{title:"eslint",permalink:"/docs/category/eslint"}},l={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'git config --global user.name "\u59d3\u540d"\ngit config --global user.email "\u7535\u5b50\u90ae\u4ef6"\n\ngit config user.name\ngit config user.email\n\ngit init\ngit add .\ngit remote add origin \u5730\u5740\n\ngit branch -M main\ngit checkout \u5206\u652f\n\ngit commit -m "first commit"   \ngit commit --no-verify -m "add goods"\ngit commit --amend\n\ngit pull                \ngit pull origin main --allow-unrelated-histories \n\ngit push -u origin main     \ngit push -f origin main\n\ngit reset --soft HEAD^\n')))}p.isMDXComponent=!0}}]);