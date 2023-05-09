"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2666],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},66786:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={},i=void 0,s={unversionedId:"\u9879\u76ee\u5b9e\u8df5/\u914d\u7f6e/\u914d\u7f6ewebpack/\u4ee3\u7406\u914d\u7f6e",id:"\u9879\u76ee\u5b9e\u8df5/\u914d\u7f6e/\u914d\u7f6ewebpack/\u4ee3\u7406\u914d\u7f6e",title:"\u4ee3\u7406\u914d\u7f6e",description:"",source:"@site/docs/\u9879\u76ee\u5b9e\u8df5/\u914d\u7f6e/\u914d\u7f6ewebpack/\u4ee3\u7406\u914d\u7f6e.md",sourceDirName:"\u9879\u76ee\u5b9e\u8df5/\u914d\u7f6e/\u914d\u7f6ewebpack",slug:"/\u9879\u76ee\u5b9e\u8df5/\u914d\u7f6e/\u914d\u7f6ewebpack/\u4ee3\u7406\u914d\u7f6e",permalink:"/docs/\u9879\u76ee\u5b9e\u8df5/\u914d\u7f6e/\u914d\u7f6ewebpack/\u4ee3\u7406\u914d\u7f6e",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/\u9879\u76ee\u5b9e\u8df5/\u914d\u7f6e/\u914d\u7f6ewebpack/\u4ee3\u7406\u914d\u7f6e.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"webpack",permalink:"/docs/category/webpack"},next:{title:"\u57fa\u672c\u914d\u7f6e",permalink:"/docs/\u9879\u76ee\u5b9e\u8df5/\u914d\u7f6e/\u914d\u7f6ewebpack/\u57fa\u672c\u914d\u7f6e"}},c={},p=[],l={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const path = require("path");\n\nmodule.exports = {\n  dev: {\n    // Paths\n    assetsSubDirectory: "static",\n    assetsPublicPath: "/",\n    proxyTable: {\n      "/admin": {\n        target:\n          "http://192.168.1.1/teacher-development-center/backend/index.php/admin", // \u8bbe\u7f6e\u8c03\u7528\u63a5\u53e3\u57df\u540d\u548c\u7aef\u53e3\u53f7\u522b\u5fd8\u4e86\u52a0http\n\n        changeOrigin: true,\n        pathRewrite: {\n          "^/admin": "", // \u8fd9\u91cc\u7406\u89e3\u6210\u7528\u2018/admin\u2019\u4ee3\u66fftarget\u91cc\u9762\u7684\u5730\u5740\uff0c\u7ec4\u4ef6\u4e2d\u6211\u4eec\u8c03\u63a5\u53e3\u65f6\u76f4\u63a5\u7528/wechat\n          // \u6bd4\u5982\u6211\u8981\u8c03\u7528\'http://0.0:300/user/add\'\uff0c\u76f4\u63a5\u5199\u2018/api/user/add\u2019\u5373\u53ef \u4ee3\u7406\u540e\u5730\u5740\u680f\u663e\u793a/\n        },\n      },\n      "/wechat": {\n        target:\n          "http://192.168.1.1/teacher-development-center/backend/index.php/wechat", // \u8bbe\u7f6e\u8c03\u7528\u63a5\u53e3\u57df\u540d\u548c\u7aef\u53e3\u53f7\u522b\u5fd8\u4e86\u52a0http\n\n        changeOrigin: true,\n        pathRewrite: {\n          "^/wechat": "", // \u8fd9\u91cc\u7406\u89e3\u6210\u7528\u2018/admin\u2019\u4ee3\u66fftarget\u91cc\u9762\u7684\u5730\u5740\uff0c\u7ec4\u4ef6\u4e2d\u6211\u4eec\u8c03\u63a5\u53e3\u65f6\u76f4\u63a5\u7528/wechat\n          // \u6bd4\u5982\u6211\u8981\u8c03\u7528\'http://0.0:300/user/add\'\uff0c\u76f4\u63a5\u5199\u2018/api/user/add\u2019\u5373\u53ef \u4ee3\u7406\u540e\u5730\u5740\u680f\u663e\u793a/\n        },\n      },\n    },\n\n    // Various Dev Server settings\n    host: "0.0.0.0", // can be overwritten by process.env.HOST\n    port: 9527, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined\n    autoOpenBrowser: false,\n    errorOverlay: true,\n    notifyOnErrors: true,\n    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-\n\n    // Use Eslint Loader?\n    // If true, your code will be linted during bundling and\n    // linting errors and warnings will be shown in the console.\n    useEslint: true,\n    // If true, eslint errors and warnings will also be shown in the error overlay\n    // in the browser.\n    showEslintErrorsInOverlay: false,\n\n    /**\n     * Source Maps\n     */\n\n    // https://webpack.js.org/configuration/devtool/#development\n    devtool: "cheap-module-eval-source-map",\n\n    // If you have problems debugging vue-files in devtools,\n    // set this to false - it *may* help\n    // https://vue-loader.vuejs.org/en/options.html#cachebusting\n    cacheBusting: true,\n\n    cssSourceMap: true,\n  },\n\n  prd: {\n    // Template for index.html\n    index: path.resolve(__dirname, "../dist/admin.html"),\n\n    // Paths\n    assetsRoot: path.resolve(__dirname, "../dist"),\n    assetsSubDirectory: "vue-admin-static",\n    assetsPublicPath: "/",\n\n    /**\n     * Source Maps\n     */\n\n    productionSourceMap: false,\n    // https://webpack.js.org/configuration/devtool/#production\n    devtool: "#source-map",\n\n    // Gzip off by default as many popular static hosts such as\n    // Surge or Netlify already gzip all static assets for you.\n    // Before setting to `true`, make sure to:\n    // npm install --save-dev compression-webpack-plugin\n    productionGzip: false,\n    productionGzipExtensions: ["js", "css"],\n\n    // Run the build command with an extra argument to\n    // View the bundle analyzer report after build finishes:\n    // `npm run build --report`\n    // Set to `true` or `false` to always turn it on or off\n    bundleAnalyzerReport: process.env.npm_config_report,\n  },\n};\n')))}u.isMDXComponent=!0}}]);