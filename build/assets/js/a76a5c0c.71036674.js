"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=i.createContext({}),p=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(a.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,f=h["".concat(a,".").concat(m)]||h[m]||d[m]||s;return n?i.createElement(f,l(l({ref:t},c),{},{components:n})):i.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[h]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(87462),r=n(67294),s=n(3905);class l extends r.Component{constructor(e){super(e);this.text="",this.setLineClamp=this.setLineClamp.bind(this),this.setLineNormal=this.setLineNormal.bind(this),this.clipText=this.clipText.bind(this),this.init=this.init.bind(this)}componentDidMount(){this.init()}componentDidUpdate(){this.init()}init(){"webkitLineClamp"in document.documentElement.style?(this.setLineClamp(),this.removeTpl()):(this.setLineNormal(),this.clipText())}removeTpl(){try{this.refs.ellip.removeChild(this.refs.getHeight)}catch(e){}}setLineNormal(){Object.assign(this.refs.ellip.style,{"word-break":"break-all","white-space":"normal"})}setLineClamp(){Object.assign(this.refs.ellip.style,{overflow:"hidden",display:"-webkit-box",webkitBoxOrient:"vertical","word-break":"break-all","white-space":"normal",webkitLineClamp:this.props.line})}clipText(){let{line:e,ellipsis:t,end:n=(()=>{})}=this.props,i=this.refs.ellip;if(!this.h){let e=this.refs.getHeight;this.h=e.offsetHeight,this.removeTpl()}let r=!0;this.text?i.innerHTML=this.text:this.text=i.textContent;let s=this.text,l=()=>{let n=0;for(;Math.floor(parseFloat(getComputedStyle(i).height,10)/this.h)>e;)n+=1,s=s.slice(0,-1),i.innerHTML=s,r||(i.innerHTML+=t);return n};0<l()&&(i.innerHTML+=t,r=!1,l()),n()}render(){let{children:e,className:t=""}=this.props;return r.createElement("div",{ref:"box",className:t},r.createElement("div",{ref:"ellip"},e,r.createElement("span",{ref:"getHeight",style:{visibility:"hidden"}},"\u597d")))}}function o(e){let{children:t}=e;return r.createElement("div",{className:"text"},t)}l.defaultProps={line:2,ellipsis:"..."};const a={},p=void 0,c={unversionedId:"web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/css/\u5355\u884c\u6587\u5b57\u5bb9\u5668\u7701\u7565",id:"web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/css/\u5355\u884c\u6587\u5b57\u5bb9\u5668\u7701\u7565",title:"\u5355\u884c\u6587\u5b57\u5bb9\u5668\u7701\u7565",description:"",source:"@site/docs/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/css/\u5355\u884c\u6587\u5b57\u5bb9\u5668\u7701\u7565.mdx",sourceDirName:"web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/css",slug:"/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/css/\u5355\u884c\u6587\u5b57\u5bb9\u5668\u7701\u7565",permalink:"/docs/next/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/css/\u5355\u884c\u6587\u5b57\u5bb9\u5668\u7701\u7565",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/css/\u5355\u884c\u6587\u5b57\u5bb9\u5668\u7701\u7565.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"js\u539f\u751f\u4fee\u6539css",permalink:"/docs/next/web\u524d\u7aef/\u524d\u7aef\u4e09\u5927\u4ef6/css/js\u539f\u751f\u4fee\u6539css"},next:{title:"\u524d\u7aef\u6280\u672f\u6808",permalink:"/docs/next/category/\u524d\u7aef\u6280\u672f\u6808"}},h={},d=[{value:"1.css \u5b9e\u73b0",id:"1css-\u5b9e\u73b0",level:2},{value:"2.react \u7ec4\u4ef6",id:"2react-\u7ec4\u4ef6",level:2}],m={toc:d};function f(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1css-\u5b9e\u73b0"},"1.css \u5b9e\u73b0"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},'// \u6587\u672c\u8d85\u51fa\u4e24\u884c\u663e\u793a\u7701\u7565\u53f7\n\n \u6ce8:\u5982\u679c\u8bbe\u7f6e\u4e86 \u5f39\u6027\u5e03\u5c40 display:flex; \u90a3\u4e48\u4e0b\u9762\u7684\u7684css\u8bbe\u7f6e\u5c06\u4e0d\u8d77\u4f5c\u7528\n\n// \u5355\u884c\u6587\u672c\u8d85\u51fa\u663e\u793a\u7701\u7565\u53f7\n\ndiv {\n    width: 300px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n// \u591a\u884c\u884c\u6587\u672c\u8d85\u51fa\u663e\u793a\u7701\u7565\u53f7\uff0cwebkit\u6d4f\u89c8\u5668\u4f7f\u7528\ndiv {\n   width: 300px;\n   overflow:hidden;\n   text-overflow:ellipsis;\n   display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n }\n\n//\u901a\u7528\u6d4f\u89c8\u5668\n// \u6587\u5b57\u5bb9\u5668\u6837\u5f0f\u8bbe\u7f6e\uff1a\n.text {\n  width: 200px;\n  position: relative;\n  line-height: 1.4em;\n  height: 2.8em; //\u500d\u6570\u5173\u7cfb\uff0c\u5373\u884c\u6570\n  overflow: hidden;\n}\n\n.text::after {\n  background: linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff 50%)\n    repeat scroll 0 0 rgba(0, 0, 0, 0);\n  bottom: 0;\n  content: "...";\n  padding: 0 5px 1px 30px;\n  position: absolute;\n  right: 0;\n}\n\n')),(0,s.kt)(o,{mdxType:"CssEllipsis"},"\u662f\u5206\u516c\u53f8\u5206\u516c\u53f8\u662f\u5206\u516c\u53f8\u5206\u516c\u53f8\u662f\u5206\u516c\u53f8\u5206\u516c\u53f8\u662f\u5206\u516c\u53f8\u5206\u516c\u53f8\u662f\u5206\u516c\u53f8\u5206\u516c\u53f8\u662f\u5206\u516c\u53f8\u5206\u516c\u53f8\u662f\u5206\u516c\u53f8\u5206\u516c\u53f8\u662f\u5206\u516c\u53f8\u5206\u516c\u53f8\u662f\u5206\u516c\u53f8\u5206\u516c\u53f8\u662f\u5206\u516c\u53f8\u5206\u516c\u53f8\u662f\u5206\u516c\u53f8\u5206\u516c\u53f8\u662f\u5206\u516c\u53f8\u5206\u516c\u53f8\u662f\u5206\u516c\u53f8\u5206\u516c\u53f8"),(0,s.kt)("h2",{id:"2react-\u7ec4\u4ef6"},"2.react \u7ec4\u4ef6"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u652f\u6301 css \u5904\u7406\u7684\u65f6\u5019\uff0c\u76f4\u63a5\u7528 css,\u4e0d\u652f\u6301\u7684\u65f6\u5019\uff0c\u901a\u8fc7 js \u8ba1\u7b97\u6765\u5904\u7406\u663e\u793a\u6587\u5b57")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\n\nexport default class Ellipsis extends React.Component {\n  static defaultProps = {\n    line: 2,\n    ellipsis: "...",\n  };\n\n  constructor(props) {\n    super(props);\n\n    let that = this;\n\n    this.text = "";\n    this.setLineClamp = this.setLineClamp.bind(this);\n    this.setLineNormal = this.setLineNormal.bind(this);\n    this.clipText = this.clipText.bind(this);\n    this.init = this.init.bind(this);\n  }\n\n  componentDidMount() {\n    this.init();\n  }\n\n  componentDidUpdate() {\n    this.init();\n  }\n\n  init() {\n    if ("webkitLineClamp" in document.documentElement.style) {\n      this.setLineClamp();\n      this.removeTpl();\n    } else {\n      this.setLineNormal();\n      this.clipText();\n    }\n  }\n\n  removeTpl() {\n    try {\n      this.refs.ellip.removeChild(this.refs.getHeight);\n    } catch (err) {}\n  }\n\n  setLineNormal() {\n    Object.assign(this.refs.ellip.style, {\n      "word-break": "break-all",\n      "white-space": "normal",\n    });\n  }\n\n  setLineClamp() {\n    Object.assign(this.refs.ellip.style, {\n      overflow: "hidden",\n      display: "-webkit-box",\n      webkitBoxOrient: "vertical",\n      "word-break": "break-all",\n      "white-space": "normal",\n      webkitLineClamp: this.props.line,\n    });\n  }\n\n  clipText() {\n    let { line, ellipsis, end = () => {} } = this.props;\n    let ellip = this.refs.ellip;\n\n    if (!this.h) {\n      let getHeight = this.refs.getHeight;\n      this.h = getHeight.offsetHeight;\n      this.removeTpl();\n    }\n\n    let getCountHeight = () => {\n      return parseFloat(getComputedStyle(ellip)["height"], 10);\n    };\n\n    let init = true;\n\n    if (!this.text) {\n      this.text = ellip.textContent;\n    } else {\n      ellip.innerHTML = this.text;\n    }\n\n    let text = this.text;\n    let clip = () => {\n      let len = 0;\n      while (Math.floor(getCountHeight() / this.h) > line) {\n        len += 1;\n\n        text = text.slice(0, -1);\n        ellip.innerHTML = text;\n\n        if (!init) {\n          ellip.innerHTML += ellipsis;\n        }\n      }\n\n      return len;\n    };\n\n    if (0 < clip()) {\n      ellip.innerHTML += ellipsis;\n      init = false;\n      clip();\n    }\n\n    end();\n  }\n\n  render() {\n    let { children, className = "" } = this.props;\n\n    return (\n      <div ref="box" className={className}>\n        <div ref="ellip">\n          {children}\n          <span ref="getHeight" style={{ visibility: "hidden" }}>\n            \u597d\n          </span>\n        </div>\n      </div>\n    );\n  }\n}\n')),(0,s.kt)(l,{mdxType:"Ellipsis"},"\u7c89\u8272\u9632\u6652\u670d\u521a\u6536\u5230\u7684\u5730\u5bf9\u5730\u5bfc\u5f39\u5730\u5bf9\u5730\u5bfc\u5f39\u591a\u5927\u7684\u7c89\u8272\u9632\u6652\u670d\u521a\u6536\u5230\u7684\u5730\u5bf9\u5730\u5bfc\u5f39\u5730\u5bf9\u5730\u5bfc\u5f39\u591a\u5927\u7684\u7c89\u8272\u9632\u6652\u670d\u521a\u6536\u5230\u7684\u5730\u5bf9\u5730\u5bfc\u5f39\u5730\u5bf9\u5730\u5bfc\u5f39\u591a\u5927\u7684\u7c89\u8272\u9632\u6652\u670d\u521a\u6536\u5230\u7684\u5730\u5bf9\u5730\u5bfc\u5f39\u5730\u5bf9\u5730\u5bfc\u5f39\u591a\u5927\u7684\u7c89\u8272\u9632\u6652\u670d\u521a\u6536\u5230\u7684\u5730\u5bf9\u5730\u5bfc\u5f39\u5730\u5bf9\u5730\u5bfc\u5f39\u591a\u5927\u7684"))}f.isMDXComponent=!0}}]);