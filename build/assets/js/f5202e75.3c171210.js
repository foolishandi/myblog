"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,s={unversionedId:"intro/npm/\u5143\u7d20\u4ea4\u4e92",id:"intro/npm/\u5143\u7d20\u4ea4\u4e92",title:"\u5143\u7d20\u4ea4\u4e92",description:"1.react-dropzone file \u6587\u4ef6\u9009\u53d6",source:"@site/docs/intro/npm/\u5143\u7d20\u4ea4\u4e92.md",sourceDirName:"intro/npm",slug:"/intro/npm/\u5143\u7d20\u4ea4\u4e92",permalink:"/docs/intro/npm/\u5143\u7d20\u4ea4\u4e92",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/intro/npm/\u5143\u7d20\u4ea4\u4e92.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"util",permalink:"/docs/intro/npm/util"},next:{title:"\u54cd\u5e94\u5f0f\u5e03\u5c40\u76f8\u5173",permalink:"/docs/intro/npm/\u54cd\u5e94\u5f0f\u5e03\u5c40\u76f8\u5173"}},c={},l=[{value:"1.react-dropzone file \u6587\u4ef6\u9009\u53d6",id:"1react-dropzone-file-\u6587\u4ef6\u9009\u53d6",level:2},{value:"2. react-toastify",id:"2-react-toastify",level:2},{value:"3.react-onclickoutside",id:"3react-onclickoutside",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1react-dropzone-file-\u6587\u4ef6\u9009\u53d6"},"1.",(0,o.kt)("a",{parentName:"h2",href:"https://react-dropzone.js.org/"},"react-dropzone file \u6587\u4ef6\u9009\u53d6")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"npm install --save react-dropzone\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://react-dropzone.js.org/#!/Basic%20example/1"},"demo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport { useDropzone } from "react-dropzone";\n\nfunction Basic(props) {\n  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();\n\n  const files = acceptedFiles.map((file) => (\n    <li key={file.path}>\n      {file.path} - {file.size} bytes\n    </li>\n  ));\n\n  return (\n    <section className="container">\n      <div {...getRootProps({ className: "dropzone" })}>\n        <input {...getInputProps()} />\n        <p>Drag \'n\' drop some files here, or click to select files</p>\n      </div>\n      <aside>\n        <h4>Files</h4>\n        <ul>{files}</ul>\n      </aside>\n    </section>\n  );\n}\n')),(0,o.kt)("h2",{id:"2-react-toastify"},"2. ",(0,o.kt)("a",{parentName:"h2",href:"https://fkhadra.github.io/react-toastify/installation"},"react-toastify")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport { toast, ToastContainer } from "react-toastify";\nimport "react-toastify/dist/ReactToastify.css";\n\ntoast("\ud83e\udd84 Wow so easy!", {\n  position: "top-right",\n  autoClose: 5000,\n  hideProgressBar: false,\n  closeOnClick: true,\n  pauseOnHover: true,\n  draggable: true,\n  progress: undefined,\n  theme: "light",\n});\n\nfunction Example() {\n  const notify = () => {\n    toast("Default Notification !");\n\n    toast.success("Success Notification !", {\n      position: toast.POSITION.TOP_CENTER,\n    });\n\n    toast.error("Error Notification !", {\n      position: toast.POSITION.TOP_LEFT,\n    });\n\n    toast.warn("Warning Notification !", {\n      position: toast.POSITION.BOTTOM_LEFT,\n    });\n\n    toast.info("Info Notification !", {\n      position: toast.POSITION.BOTTOM_CENTER,\n    });\n\n    toast("Custom Style Notification with css class!", {\n      position: toast.POSITION.BOTTOM_RIGHT,\n      className: "foo-bar",\n    });\n  };\n\n  return (\n    <>\n      <button onClick={notify}>Notify</button>;\n      <ToastContainer />\n    </>\n  );\n}\n')),(0,o.kt)("h2",{id:"3react-onclickoutside"},"3.react-onclickoutside"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"")))}u.isMDXComponent=!0}}]);