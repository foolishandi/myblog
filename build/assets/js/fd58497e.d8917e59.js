"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6967],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),y=a,m=u["".concat(c,".").concat(y)]||u[y]||f[y]||o;return t?r.createElement(m,s(s({ref:n},p),{},{components:t})):r.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=y;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},24479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={},s=void 0,i={unversionedId:"web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/JSON.stringify",id:"version-1.0/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/JSON.stringify",title:"JSON.stringify",description:"",source:"@site/versioned_docs/version-1.0/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/JSON.stringify.md",sourceDirName:"web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6",slug:"/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/JSON.stringify",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/JSON.stringify",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/versioned_docs/version-1.0/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/JSON.stringify.md",tags:[],version:"1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"basic",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/object/basic"},next:{title:"intl",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/es6/intl"}},c={},l=[],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"JSON.stringify(value[, replacer [, space]])\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u5c06\u8981\u5e8f\u5217\u5316\u6210 \u4e00\u4e2a JSON \u5b57\u7b26\u4e32\u7684\u503c\u3002\n\n1.replacer\u53ef\u9009\n\u53ef\u4ee5\u4e3a\u6570\u7ec4\u6216\u51fd\u6570\n\n\u5982\u679c\u4e3a\u6570\u7ec4\uff1a\u5219\u53ea\u6709\u5305\u542b\u5728\u8fd9\u4e2a\u6570\u7ec4\u4e2d\u7684\u5c5e\u6027\u540d\u624d\u4f1a\u88ab\u5e8f\u5217\u5316\u5230\u6700\u7ec8\u7684 JSON \u5b57\u7b26\u4e32\u4e2d\n2.replacer \u4f5c key \u503c\uff08\u8fd9\u4e2a\u5728\u8bb2\u5b9e\u4f8b\u7684\u65f6\u5019\u5c31\u77e5\u9053\u8fd9\u4e2a key \u662f\u5e72\u561b\u7684\u4e86\uff0c\u5148\u8bb0\u4f4f\u5c31\u597d\uff09\n\u5982\u679c\u4e3a\u51fd\u6570\uff1a\u5219\u628a\u7cfb\u5217\u5316\u540e\u7684\u6bcf\u4e00\u4e2a\u5bf9\u8c61\uff08\u8bb0\u4f4f\u662f\u6bcf\u4e00\u4e2a\uff09\u4f20\u8fdb\u65b9\u6cd5\u91cc\u9762\u8fdb\u884c\u5904\u7406\n\n3.space\u53ef\u9009\n\u6307\u5b9a\u7f29\u8fdb\u7528\u7684\u7a7a\u767d\u5b57\u7b26\u4e32\n\u5982\u679c\u7701\u7565\u7684\u8bdd\uff0c\u90a3\u4e48\u663e\u793a\u51fa\u6765\u7684\u503c\u5c31\u6ca1\u6709\u5206\u9694\u7b26\u3002\u76f4\u63a5\u8f93\u51fa\u6765\n\u5982\u679c\u662f\u4e00\u4e2a\u6570\u5b57\u7684\u8bdd\uff0c\u90a3\u4e48\u5b83\u5c31\u5b9a\u4e49\u7f29\u8fdb\u51e0\u4e2a\u5b57\u7b26\uff0c\u8303\u56f4\u662f\uff1a0 \u5230 10\uff08\u6570\u5b57\u5c0f\u4e8e 1\uff0c\u5219\u9ed8\u8ba4\u4e3a 0\uff0c\u5927\u4e8e 10\uff0c\u5219\u9ed8\u8ba4\u4e3a 10\uff09\n\u5982\u679c\u662f\u4e00\u4e9b\u8f6c\u4e49\u5b57\u7b26\uff0c\u6bd4\u5982\u201c\\t\u201d\uff0c\u8868\u793a\u56de\u8f66\uff0c\u90a3\u4e48\u5b83\u6bcf\u884c\u4e00\u4e2a\u56de\u8f66\u3002\n\u5982\u679c\u4ec5\u4ec5\u662f\u5b57\u7b26\u4e32\uff0c\u5c31\u5728\u6bcf\u884c\u8f93\u51fa\u503c\u7684\u65f6\u5019\u628a\u8fd9\u4e9b\u5b57\u7b26\u4e32\u9644\u52a0\u4e0a\u53bb\u5c31 OK\u3002\u5f53\u7136\uff0c\u6700\u5927\u957f\u5ea6\u4e5f\u662f 10 \u4e2a\u5b57\u7b26\n\n\u7b2c\u4e09\u4e2a\u53c2\u6570\u5c31\u662f\u7528\u6765\u7f29\u8fdb\u6216\u8005\u76f4\u63a5\u6dfb\u52a0\u5b57\u7b26\u4e32\u5728\u5e8f\u5217\u5316\u5bf9\u8c61\u7684\u524d\u9762\uff0c\u6ce8\u610f\u6700\u591a\u53ea\u80fd 10 \u4e2a\u7f29\u8fdb\u6216\u5b57\u7b26\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'JSON.stringify({ a: 2 }, null, " ");\n// \u8f93\u51fa\u7ed3\u679c\uff1a{\\n "a": 2\\n}\n\nJSON.stringify({ uno: 1, dos : 2 }, null, \'\\t\')\n/_ \u8f93\u51fa\u7ed3\u679c\uff1a\n{\n"uno": 1,\n"dos": 2\n}\n_/\n\nlet students = new Object();\nstudents.name = "pika";\nstudents.age = 19;\nstudents.qq = "12345678";\nlet stu= new Array();\nstu[0] = "name";\nstu[1] = "qq";\nlet json = JSON.stringify(students,stu,"test")\n/_ \u8f93\u51fa\u7ed3\u679c\uff1a\n{\ntest"name": "pika",\ntest"qq": "12345678"\n}\n_/\n')))}u.isMDXComponent=!0}}]);