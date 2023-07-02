"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7944],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={},l=void 0,i={unversionedId:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/antd/table/\u5408\u5e76\u884c\u76f8\u5173",id:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/antd/table/\u5408\u5e76\u884c\u76f8\u5173",title:"\u5408\u5e76\u884c\u76f8\u5173",description:"\u5408\u5e76\u884c\u51fd\u6570",source:"@site/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/antd/table/\u5408\u5e76\u884c\u76f8\u5173.md",sourceDirName:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/antd/table",slug:"/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/antd/table/\u5408\u5e76\u884c\u76f8\u5173",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/antd/table/\u5408\u5e76\u884c\u76f8\u5173",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/antd/table/\u5408\u5e76\u884c\u76f8\u5173.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"antd",permalink:"/docs/category/antd"},next:{title:"fullcalendar",permalink:"/docs/category/fullcalendar"}},c={},s=[{value:"\u5408\u5e76\u884c\u51fd\u6570",id:"\u5408\u5e76\u884c\u51fd\u6570",level:2},{value:"column \u4f7f\u7528",id:"column-\u4f7f\u7528",level:2}],p={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5408\u5e76\u884c\u51fd\u6570"},"\u5408\u5e76\u884c\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/* \ndata:\u5904\u7406\u7684\u6570\u636e\nname:\u5408\u5e76\u6807\u8bb0\u7684\u5b57\u6bb5\nlink:\u5176\u4ed6\u76f8\u5173\u5b57\u6bb5\uff0c\u53ef\u591a\u4e2a\u53c2\u6570\n*/\nfunction setListRowSpan(source, name, ...link) {\n  const setRowSpan = (source, name, ...link) => {\n    let linkHead = null;\n    if (link && link.length > 0) {\n      linkHead = link[0];\n    }\n    let data = JSON.parse(JSON.stringify(source));\n    const rowSpan = `${name}RowSpan`;\n    let titleRow = data[0]; // \u5408\u5e76\u884c\n    titleRow[rowSpan] = 1;\n    data.forEach((row, index) => {\n      if (linkHead) row[name + linkHead] = row[name] + "-" + row[linkHead];\n      const nextRow = data[index + 1];\n      if (!nextRow) return;\n      if (row[name] === nextRow[name]) {\n        titleRow[rowSpan] += 1;\n        nextRow[rowSpan] = 0;\n      } else {\n        titleRow = nextRow; // \u4fee\u6539\u6307\u5411\n        titleRow[rowSpan] = 1;\n      }\n    });\n    //   console.log(data)\n    if (linkHead && link.length > 1) {\n      data = setRowSpan(data, name + linkHead, link.slice(1));\n    }\n    return data;\n  };\n\n  const dataList = setRowSpan(source, name, ...link);\n  // \u5408\u5e76\u6700\u540e\u4e00\u6b21\u7684\u6570\u636e\n  const res = setRowSpan(dataList, [name, ...link].join(""));\n  return res;\n}\n')),(0,a.kt)("h2",{id:"column-\u4f7f\u7528"},"column \u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u7b80\u5355\u4f7f\u7528\nconst data=[{},\xb7\xb7\xb7]\n\nsetRowSpan(data,'title','name') //\u6539\u53d8\u539f\u6570\u636e\u5bf9\u8c61\n\nconst columns = [\n  {\n    title: \"\u98ce\u9669\u7c7b\u522b\",\n    dataIndex: \"title\",\n    render: (text, row) => {\n      return {\n        children: text,\n        props: {\n          rowSpan: row.titleRowSpan, // \u4f7f\u7528\n        },\n      };\n    },\n  },\n];\n")))}d.isMDXComponent=!0}}]);