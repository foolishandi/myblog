"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3026],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=d(t),p=o,y=l["".concat(i,".").concat(p)]||l[p]||m[p]||a;return t?r.createElement(y,u(u({ref:n},s),{},{components:t})):r.createElement(y,u({ref:n},s))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[l]="string"==typeof e?e:o,u[1]=c;for(var d=2;d<a;d++)u[d]=t[d];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},30002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>y});var r=t(87462),o=t(67294),a=t(3905);const u=(0,o.createContext)(),c=(0,o.memo)((function(e){void 0===e&&(e={});const{state:n,dispatch:t}=(0,o.useContext)(u);return console.log("\u5b59\u5b50render"),o.createElement("div",{style:{backgroundColor:"rgba(0,0,0,.2)",padding:5}},"\u5b59\u5b50",o.createElement("div",null,"num1 : ",n.num1),o.createElement("div",null,"num2 : ",n.num2),o.createElement("div",null,"num3 : ",n.num3),o.createElement("div",null,o.createElement("button",{onClick:()=>{t({type:"num1Add",payload:"\u5b59\u5b50render"})}},"num1 + 1"),o.createElement("button",{onClick:()=>{t({type:"num2Add",payload:"\u5b59\u5b50render"})}},"num2 + 1"),o.createElement("button",{onClick:()=>{t({type:"num3Add",payload:"\u5b59\u5b50render"})}},"\u6c42\u548c")))})),i=()=>o.createElement("div",{style:{backgroundColor:"greenYellow",padding:5}},"\u513f\u5b50",o.createElement(c,null)),d=function(e){void 0===e&&(e={});const[n,t]=(0,o.useReducer)(((e,n)=>{switch(n.type){case"num1Add":return Object.assign({},e,{num1:e.num1+1},{render:n.payload});case"num2Add":return{...e,render:n.payload,num2:e.num2+1};case"num3Add":return{...e,render:n.payload,num3:e.num1+e.num2};case"numAdd":return{...e,render:n.payload,num1:e.num1+2};default:return e}}),{num1:0,num2:0,num3:0,render:""});return o.createElement("div",{style:{backgroundColor:"yellow",padding:5}},"\u7237\u7237 :",o.createElement("span",null,"state:",JSON.stringify(n)),o.createElement("div",null,o.createElement("button",{onClick:()=>{t({type:"numAdd",payload:"\u7237\u7237render"})}},"num1 + 2")),o.createElement(u.Provider,{value:{state:n,dispatch:t}},o.createElement(i,null)))},s={},l="\u8de8\u7ec4\u4ef6\u76f8\u5173 hook",m={unversionedId:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5b98\u65b9hook/useContext",id:"version-1.0/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5b98\u65b9hook/useContext",title:"\u8de8\u7ec4\u4ef6\u76f8\u5173 hook",description:"",source:"@site/versioned_docs/version-1.0/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5b98\u65b9hook/useContext.mdx",sourceDirName:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5b98\u65b9hook",slug:"/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5b98\u65b9hook/useContext",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5b98\u65b9hook/useContext",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/versioned_docs/version-1.0/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5b98\u65b9hook/useContext.mdx",tags:[],version:"1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useState",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5b98\u65b9hook/useState"},next:{title:"useMemo_useCallback",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/\u5b98\u65b9hook/useMemo_useCallback"}},p={},y=[{value:"1.useReducer\uff1a\u7c7b redux \u7684 hook",id:"1usereducer\u7c7b-redux-\u7684-hook",level:2},{value:"2.useContext:\u4f20\u9012\u4e0a\u4e0b\u6587\u72b6\u6001",id:"2usecontext\u4f20\u9012\u4e0a\u4e0b\u6587\u72b6\u6001",level:2},{value:"3.\u7b80\u5355\u6a21\u62df redux",id:"3\u7b80\u5355\u6a21\u62df-redux",level:2}],f={toc:y};function h(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8de8\u7ec4\u4ef6\u76f8\u5173-hook"},"\u8de8\u7ec4\u4ef6\u76f8\u5173 hook"),(0,a.kt)("h2",{id:"1usereducer\u7c7b-redux-\u7684-hook"},"1.useReducer\uff1a\u7c7b redux \u7684 hook"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// \u91cd\u7f6e\u72b6\u6001\u903b\u8f91\nfunction init(initialCount) {\n  return { count: initialCount };\n}\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case "increment":\n      return { count: state.count + 1 };\n    case "decrement":\n      return { count: state.count - 1 };\n    case "reset":\n      return init(action.payload);\n    default:\n      throw new Error();\n  }\n}\n\nfunction Counter({ initialCount }) {\n  const [state, dispatch] = useReducer(reducer, initialCount, init);\n  return (\n    <>\n      Count: {state.count}\n      <button\n        onClick={() => dispatch({ type: "reset", payload: initialCount })}\n      >\n        Reset\n      </button>\n      <button onClick={() => dispatch({ type: "decrement" })}>-</button>\n      <button onClick={() => dispatch({ type: "increment" })}>+</button>\n    </>\n  );\n}\n')),(0,a.kt)("h2",{id:"2usecontext\u4f20\u9012\u4e0a\u4e0b\u6587\u72b6\u6001"},"2.useContext:\u4f20\u9012\u4e0a\u4e0b\u6587\u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const themes = {\n  light: {\n    foreground: "#000000",\n    background: "#eeeeee",\n  },\n  dark: {\n    foreground: "#ffffff",\n    background: "#222222",\n  },\n};\n\nconst ThemeContext = React.createContext(themes.light);\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value={themes.dark}>\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Toolbar(props) {\n  return (\n    <div>\n      <ThemedButton />\n    </div>\n  );\n}\n\nfunction ThemedButton() {\n  const theme = useContext(ThemeContext);\n  return (\n    <button\n      style={{\n        background: theme.background,\n        color: theme.foreground,\n      }}\n    >\n      I am styled by theme context!\n    </button>\n  );\n}\n')),(0,a.kt)("h2",{id:"3\u7b80\u5355\u6a21\u62df-redux"},"3.\u7b80\u5355\u6a21\u62df redux"),(0,a.kt)(d,{mdxType:"App"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useReducer } from "react";\nimport DemoContext from "./DemoContext";\nimport App2 from "./App2";\nconst App = (props = {}) => {\n  const initialState = { num1: 0, num2: 0, num3: 0, render: "" };\n  const reducer = (state, action) => {\n    // console.log(\'reducer\' ,state,action)\n    switch (action.type) {\n      case "num1Add":\n        return Object.assign(\n          {},\n          state,\n          { num1: state.num1 + 1 },\n          { render: action.payload }\n        );\n      case "num2Add":\n        return {\n          ...state,\n          render: action.payload,\n          num2: state.num2 + 1,\n        };\n\n      case "num3Add":\n        return {\n          ...state,\n          render: action.payload,\n          num3: state.num1 + state.num2,\n        };\n      case "numAdd":\n        return {\n          ...state,\n          render: action.payload,\n          num1: state.num1 + 2,\n        };\n      default:\n        return state;\n    }\n  };\n  const [state, dispatch] = useReducer(reducer, initialState);\n  return (\n    <div style={{ backgroundColor: "yellow", padding: 5 }}>\n      \u7237\u7237 :<span>state:{JSON.stringify(state)}</span>\n      <div>\n        <button\n          onClick={() => {\n            dispatch({ type: "numAdd", payload: "\u7237\u7237render" });\n          }}\n        >\n          num1 + 2\n        </button>\n      </div>\n      {/* \u4f20\u9012\u72b6\u6001 */}\n      <DemoContext.Provider value={{ state, dispatch }}>\n        <App2></App2>\n      </DemoContext.Provider>\n    </div>\n  );\n};\n\nexport default App;\n')))}h.isMDXComponent=!0}}]);