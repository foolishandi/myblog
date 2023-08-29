"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={},s=void 0,l={unversionedId:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/dva/\u57fa\u672c\u7ed3\u6784",id:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/dva/\u57fa\u672c\u7ed3\u6784",title:"\u57fa\u672c\u7ed3\u6784",description:"1.\u5165\u53e3\u914d\u7f6e",source:"@site/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/dva/\u57fa\u672c\u7ed3\u6784.md",sourceDirName:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/dva",slug:"/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/dva/\u57fa\u672c\u7ed3\u6784",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/dva/\u57fa\u672c\u7ed3\u6784",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/dva/\u57fa\u672c\u7ed3\u6784.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/fullcalendar/"},next:{title:"react",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/react/hooks/react"}},c={},i=[{value:"1.\u5165\u53e3\u914d\u7f6e",id:"1\u5165\u53e3\u914d\u7f6e",level:2},{value:"2.\u5efa\u7acb\u4e1a\u52a1\u6a21\u578b",id:"2\u5efa\u7acb\u4e1a\u52a1\u6a21\u578b",level:2},{value:"3.\u89c6\u56fe\u8c03\u7528",id:"3\u89c6\u56fe\u8c03\u7528",level:2}],u={toc:i};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u5165\u53e3\u914d\u7f6e"},"1.\u5165\u53e3\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"titel=src/index.js",titel:"src/index.js"},'import dva from "dva";\n// 1. Initialize\nconst app = dva();\n\n// 2. Plugins\n// app.use({});\n\n// 3. Model\napp.model(require("./models/example").default);\n\n// 4. Router\napp.router(require("./router").default);\n\n// 5. Start\napp.start("#root");\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/router.js",title:"src/router.js"},'import { Router, Route, Switch } from "dva/router";\nimport IndexPage from "./routes/IndexPage";\n\nfunction RouterConfig({ history }) {\n  return (\n    <Router history={history}>\n      <Switch>\n        <Route path="/" exact component={IndexPage} />\n      </Switch>\n    </Router>\n  );\n}\n\nexport default RouterConfig;\n')),(0,a.kt)("h2",{id:"2\u5efa\u7acb\u4e1a\u52a1\u6a21\u578b"},"2.\u5efa\u7acb\u4e1a\u52a1\u6a21\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/models.js",title:"src/models.js"},'\u5efa\u7acb\u901a\u7528model;\n\nconst initState = {\n    name:\'\',\n    uid:\'\',\n    loading:false\n};\n\nexport default {\n  namespace: "example",\n\n  state:JSON.parse(JSON.stringify(initState)),\n\n  subscriptions: {\n    setup({ dispatch, history }) {},\n  },\n\n  effects: {\n    *fetch({ payload }, { call, put, select }) {\n      const modelA = select(({ modelA }) => modelA);\n\n      const state = select(({ example }) => example);\n\n      const { a, b } = yield select();\n\n      yield put({ type: "save" });\n    },\n  },\n  *submit(action, { put, call, select }) {\n    const formData = yield select((state) => {\n      const buyModel = state.buy;\n      const context = state.context;\n      const { stock } = buyModel;\n      return {\n        uuid: context.uuid,\n        market: stock && stock.market,\n        stockCode: stock && stock.code,\n        stockName: stock && stock.name,\n        price: String(buyModel.price),\n        // \u59d4\u6258\u6570\u91cf\n        entrustAmount: String(buyModel.count),\n        totalBalance: buyModel.totalBalance,\n        availableTzbBalance: buyModel.availableTzbBalance,\n        availableDepositBalance: buyModel.availableDepositBalance,\n      };\n    });\n    const result = yield call(post, "/h5/ajax/trade/entrust_buy", formData, {\n      loading: true,\n    });\n\n    if (result.success) {\n      toast({\n        type: "success",\n        content: "\u59d4\u6258\u5df2\u53d7\u7406",\n      });\n      // \u6210\u529f\u4e4b\u540e\u518d\u83b7\u53d6\u4e00\u6b21\u73b0\u4ef7\uff0c\u5e76\u586b\u5165\n      // yield put({type: \'fetchQuotation\', payload: stock});\n\n      yield put({\n        type: "entrustNoChange",\n        payload: result.result && result.result.entrustNo,\n      });\n      // \u6e05\u7a7a\u8f93\u5165\u6846\u5185\u5bb9\n      yield put({ type: "searchQueryChange", value: "" });\n    }\n\n    // 403\u65f6\uff0c\u9700\u8981\u9a8c\u8bc1\u5bc6\u7801\u518d\u91cd\u65b0\u63d0\u4ea4\n    if (!result.success && result.resultCode === 403) {\n      yield put({ type: "checkPassword", payload: {} });\n      return;\n    }\n\n    // \u5931\u8d25\u4e4b\u540e\u4e5f\u9700\u8981\u66f4\u65b0\u6295\u8d44\u5b9d\u548c\u4fdd\u8bc1\u91d1\u91d1\u989d\n    if (result.result) {\n      yield put({ type: "balanceChange", payload: result.result });\n    }\n\n    // \u91cd\u65b0\u83b7\u53d6\u6700\u65b0\u53ef\u64a4\u5355\u5217\u8868\n    yield put({ type: "fetchRevockList" });\n\n    // \u8fd4\u56de\u7684\u7ed3\u679c\u91cc\u9762\u5982\u679c\u6709uuid, \u7528\u65b0\u7684uuid\u66ff\u6362\n    if (result.uuid) {\n      yield put({ type: "context/updateUuid", payload: result.uuid }); //\u8c03\u7528\u5176\u4ed6model\u4e2d\u7684\u65b9\u6cd5\n    }\n  },\n  reducers: {\n    save(state, action) {\n      return { ...state, ...action.payload };\n    },\n    merge(state, action) {\n      return { ...state, ...action.payload };\n    },\n    resetAll(state,action){\n        return {...initState}\n    },\n    entrustNoChange(state,action){\n        return \xb7\xb7\xb7\n    }\uff0c\n    \xb7\xb7\xb7\n  },\n};\n')),(0,a.kt)("h2",{id:"3\u89c6\u56fe\u8c03\u7528"},"3.\u89c6\u56fe\u8c03\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/routes",title:"src/routes"},'import React, { useEffect } from "react";\nimport { connect } from "dva";\nimport styles from "./IndexPage.css";\nimport { Router } from "dva/router";\nfunction IndexPage(props) {\n  const dispatch = (type, payload, namespace: "example") => {\n    return props.dispatch({\n      payload,\n      type: `${namespace}/${type}`,\n    });\n  };\n  useEffect(() => {\n    dispacth("merge", { name: "qq" });\n    dispacth("merge", { name: "qq" }, "addOrder");\n  }, []);\n  return (\n    <div className={styles.normal}>\n      <h1 className={styles.title}>Yay! Welcome to dva!</h1>\n      <div className={styles.welcome} />\n      <ul className={styles.list}>\n        <li>\n          To get started, edit <code>src/index.js</code> and save to reload.\n        </li>\n        <li>\n          <a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">\n            Getting Started\n          </a>\n        </li>\n      </ul>\n    </div>\n  );\n}\n\nconst selectStateMap = (state) => ({\n  example: state.example,\n  ...state.content,\n});\n\nexport default connect(selectStateMap)(Router(IndexPage));\n')))}p.isMDXComponent=!0}}]);