"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7443],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var s=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,o=function(e,n){if(null==e)return{};var t,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=s.createContext({}),p=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return s.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=o,v=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return t?s.createElement(v,a(a({ref:n},u),{},{components:t})):s.createElement(v,a({ref:n},u))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<r;p++)a[p]=t[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81525:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var s=t(87462),o=(t(67294),t(3905));const r={},a="vite\u914d\u7f6e",i={unversionedId:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/vue/\u914d\u7f6e",id:"version-1.0/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/vue/\u914d\u7f6e",title:"vite\u914d\u7f6e",description:"1.package",source:"@site/versioned_docs/version-1.0/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/vue/\u914d\u7f6e.md",sourceDirName:"web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/vue",slug:"/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/vue/\u914d\u7f6e",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/vue/\u914d\u7f6e",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/versioned_docs/version-1.0/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/vue/\u914d\u7f6e.md",tags:[],version:"1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/docs/web\u524d\u7aef/\u524d\u7aef\u6280\u672f\u6808/vue/\u7b80\u4ecb"},next:{title:"devops",permalink:"/docs/category/devops"}},l={},p=[{value:"1.package",id:"1package",level:2},{value:"2.tsconfig.json",id:"2tsconfigjson",level:2},{value:"3.vite.config.ts",id:"3viteconfigts",level:2},{value:"4..env.development",id:"4envdevelopment",level:2},{value:"5.typing.d.ts",id:"5typingdts",level:2},{value:"6.main.ts",id:"6maints",level:2},{value:"7.routes/index.ts",id:"7routesindexts",level:2},{value:"8.useStore.ts",id:"8usestorets",level:2},{value:"9.example",id:"9example",level:2},{value:"9.1 no setup",id:"91-no-setup",level:3},{value:"9.2 setup",id:"92-setup",level:3}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,s.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vite\u914d\u7f6e"},"vite\u914d\u7f6e"),(0,o.kt)("h2",{id:"1package"},"1.package"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "name": "newspublish",\n  "private": true,\n  "version": "0.0.0",\n  "type": "module",\n  "scripts": {\n    "dev": "vite --mode development",\n    "build": "vue-tsc && vite build --mode production",\n    "preview": "vite preview --mode development",\n    "ts": "vue-tsc --noEmit",\n    "test": "vitest --config ./vitest.config.ts",\n    "coverage": "vitest --config ./vitest.config.ts run --coverage",\n    "db": "json-server --watch --port 8080 --delay 2000 ./src/jsonServer/newsDB.json --static ./src/assets"\n  },\n  "dependencies": {\n    "@ant-design/icons-vue": "^6.1.0",\n    "ant-design-vue": "^3.2.20",\n    "axios": "^1.4.0",\n    "element-plus": "^2.3.4",\n    "js-cookie": "^3.0.5",\n    "json-server": "^0.17.3",\n    "pinia": "^2.0.36",\n    "pinia-plugin-persist": "^1.0.0",\n    "postcss-preset-env": "^8.3.2",\n    "store2": "^2.14.2",\n    "unplugin-auto-import": "^0.15.3",\n    "unplugin-vue-components": "^0.24.1",\n    "vue": "^3.2.47",\n    "vue-router": "^4.2.0"\n  },\n  "devDependencies": {\n    "@types/js-cookie": "^3.0.3",\n    "@types/node": "^20.1.3",\n    "@vitejs/plugin-vue": "^4.1.0",\n    "less": "^4.1.3",\n    "less-loader": "^11.1.0",\n    "typescript": "^5.0.2",\n    "vite": "^4.3.2",\n    "vitest": "^0.31.0",\n    "vue-tsc": "^1.4.2"\n  },\n  "description": "This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.",\n  "main": "index.js",\n  "author": "",\n  "license": "ISC"\n}\n')),(0,o.kt)("h2",{id:"2tsconfigjson"},"2.tsconfig.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "compilerOptions": {\n    // \u5c06\u4ee3\u7801\u7f16\u8bd1\u4e3a\u6700\u65b0\u7248\u672c\u7684 JS\n    "target": "ESNext",\n    // \u4f7f\u7528 ES Module \u683c\u5f0f\u6253\u5305\u7f16\u8bd1\u540e\u7684\u6587\u4ef6\n    "module": "ESNext",\n    // \u4f7f\u7528 Node \u7684\u6a21\u5757\u89e3\u6790\u7b56\u7565\n    "moduleResolution": "node",\n    // \u5f15\u5165 ES \u6700\u65b0\u7279\u6027\u548c DOM \u63a5\u53e3\u7684\u7c7b\u578b\u5b9a\u4e49\n    "lib": ["ESNext", "DOM", "DOM.Iterable"],\n    // \u8df3\u8fc7\u5bf9 .d.ts \u6587\u4ef6\u7684\u7c7b\u578b\u68c0\u67e5\n    "skipLibCheck": true,\n    // \u5141\u8bb8\u5f15\u5165 JSON \u6587\u4ef6\n    "resolveJsonModule": true,\n    // \u8981\u6c42\u6240\u6709\u6587\u4ef6\u90fd\u662f ES Module \u6a21\u5757\u3002\n    "isolatedModules": true,\n    // \u4e0d\u8f93\u51fa\u6587\u4ef6,\u5373\u7f16\u8bd1\u540e\u4e0d\u4f1a\u751f\u6210\u4efb\u4f55js\u6587\u4ef6\n    "noEmit": true,\n    // \u4fdd\u7559\u539f\u59cb\u7684 JSX \u4ee3\u7801\uff0c\u4e0d\u8fdb\u884c\u7f16\u8bd1\n    "jsx": "preserve",\n    // \u5f00\u542f\u6240\u6709\u4e25\u683c\u7684\u7c7b\u578b\u68c0\u67e5\n    "strict": true,\n    // \u62a5\u544a\u672a\u4f7f\u7528\u7684\u5c40\u90e8\u53d8\u91cf\u7684\u9519\u8bef\n    "noUnusedLocals": true,\n    // \u62a5\u544a\u51fd\u6570\u4e2d\u672a\u4f7f\u7528\u53c2\u6570\u7684\u9519\u8bef\n    "noUnusedParameters": true,\n    // \u786e\u4fddswitch\u8bed\u53e5\u4e2d\u7684\u4efb\u4f55\u975e\u7a7a\u60c5\u51b5\u90fd\u5305\u542b\n    "noFallthroughCasesInSwitch": true,\n    // \u5141\u8bb8\u4f7f\u7528 import \u5f15\u5165\u4f7f\u7528 export = \u5bfc\u51fa\u7684\u5185\u5bb9\n    "esModuleInterop": true,\n    // \u5141\u8bb8\u4f7f\u7528js\n    "allowJs": true,\n    // \u67e5\u8be2\u7684\u57fa\u7840\u8def\u5f84\n    "baseUrl": ".",\n    // \u8def\u5f84\u6620\u5c04,\u914d\u5408\u522b\u540d\u4f7f\u7528\n    "paths": {\n      "@/*": ["src/*"],\n      "#/*": ["types/*"]\n    },\n    "types": ["element-plus/global","node"]\n  },\n  // \u9700\u8981\u68c0\u6d4b\u7684\u6587\u4ef6\n  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],\n  // \u4e3a\u6587\u4ef6\u8fdb\u884c\u4e0d\u540c\u914d\u7f6e\n  "references": [\n    {\n      "path": "./tsconfig.node.json"\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"3viteconfigts"},"3.vite.config.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { defineConfig } from "vite";\nimport vue from "@vitejs/plugin-vue";\nimport Components from "unplugin-vue-components/vite";\nimport {\n  AntDesignVueResolver,\n  ElementPlusResolver,\n} from "unplugin-vue-components/resolvers";\nimport AutoImport from "unplugin-auto-import/vite";\n// \u8fd9\u4e2apath\u7528\u5230\u4e86\u4e0a\u9762\u5b89\u88c5\u7684 @types/node\nimport path from "path";\n\nimport postcssPresetEnv from "postcss-preset-env";\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [\n    vue(),\n    AutoImport({\n      resolvers: [ElementPlusResolver()],\n    }),\n    Components({\n      resolvers: [AntDesignVueResolver(), ElementPlusResolver()],\n    }),\n  ],\n  // \u5728\u8fd9\u91cc\u8fdb\u884c\u914d\u7f6e\u522b\u540d\n  resolve: {\n    alias: {\n      // @\u4ee3\u66ffsrc\n      "@": path.resolve("./src"),\n      // #\u4ee3\u66fftypes\n      "#": path.resolve("./types"),\n    },\n  },\n  css: {\n    modules: {\n      // \u8f6c\u6362\u7c7b\u540d\uff08camelCase\u4e3a\u9a7c\u5cf0\u3001camelCaseOnly\u53ea\u4e3a\u9a7c\u5cf0\u5176\u4ed6\u90fd\u88ab\u66ff\u6362\u3001\n      // dashes\u4e3a\u4e2d\u5212\u7ebf\u3001dashesOnly\u4e3a\u53ea\u80fd\u662f\u4e2d\u5212\u7ebf\uff09\n      localsConvention: "dashes",\n\n      // \u8bbe\u7f6e\u6837\u5f0f\u662f\u5426\u662f\u5c40\u90e8\u7684 local(\u9ed8\u8ba4)\u751f\u6210hash\uff0cglobal\u5168\u5c40\u6837\u5f0f\n      scopeBehaviour: "local",\n\n      // \u8bbe\u7f6e\u6837\u5f0f\u547d\u540d\u65b9\u5f0f\n      // generateScopedName:"[hash:5]_[name]_local"\n      generateScopedName: (name, filename, css) => {\n        return `${name}${filename}${css}`;\n      },\n\n      // \u9ed8\u8ba4\u7c7b\u540d+\u5176\u4ed6\u5b57\u7b26\u4e32\uff08\u6587\u4ef6\u540d\u3001\u968f\u673a\uff09\u52a0\u5165\u5230hash\u751f\u6210\u4e2d\n      hashPrefix: "myPro",\n\n      // \u4e0d\u89e3\u6790\u8be5\u6587\u4ef6\u6837\u5f0f\u540d\uff0c\u4e00\u822c\u7528\u4e8e\u5f15\u5165\u7b2c\u4e09\u65b9\n      globalModulePaths: [/base.module.css/g],\n    },\n\n    // \u9884\u5904\u7406\u5668\uff08\u5e38\u7528\uff09\n    preprocessorOptions: {\n      // \u6574\u4e2a\u914d\u7f6e\u4f1a\u518dless\u6267\u884c\u7684\u65f6\u5019\u5f53\u4f5c\u53c2\u6570\u63d0\u4ea4\u6267\u884clessc,\u6240\u4ee5\u600e\u4e48\u914d\u7f6e\u770bless\u6587\u6863\n      less: {\n        //\u53ef\u4ee5\u4f7f\u7528 100/2px --math="always"\n        math: "always",\n\n        // \u5b9a\u4e49\u5168\u5c40\u7684\u6837\u5f0f\u53d8\u91cf\n        globalVars: {},\n\n        // \u53ef\u4ee5\u7528\u6765\u5bfc\u5165\u5168\u5c40\u53d8\u91cf\u6587\u4ef6\uff08\u5e38\u7528\uff09\n        additionalData: `@import \'@/styles/base.less\';`,\n\n        //\u5f00\u542fcss\u6620\u50cf\u7d22\u5f15\uff0c\u751f\u4ea7\u73af\u5883\u5b9a\u4f4d\u95ee\u9898\u6587\u4ef6\n        sourceMap: true,\n\n        javascriptEnabled: true,\n      },\n    },\n    postcss: {\n      // \u8bbe\u7f6ecss\u540e\u5904\u7406\uff0c\u7c7b\u4f3cjs\u4e2dbabel\uff0c\u517c\u5bb9\u4f4e\u7248\u672c\u9875\u9762\u3002\u52a0\u8f7d\u9ed8\u8ba4\u914d\u7f6e\n      plugins: [postcssPresetEnv({ browsers: "last 2 versions" })],\n    },\n  },\n  build: {\n    // rollup\u6253\u5305\u914d\u7f6e\uff0c\u5177\u4f53\u770brollupAPI\n    rollupOptions: {\n      output: {\n        assetFileNames: "[hash]-[name][extname]",\n      },\n    },\n\n    // 4kb\u4ee5\u4e0b\u53bb\u6253\u5305\u6210base64\n    assetsInlineLimit: 4096,\n\n    // \u6307\u5b9a\u8f93\u51fa\u8def\u5f84\n    outDir: "dist",\n\n    //\u6307\u5b9a\u9759\u6001\u8d44\u6e90\u8def\u5f84\n    assetsDir: "static",\n\n    //\u6253\u5305\u524d\u6e05\u7a7a\u6587\u4ef6\uff0c\u9ed8\u8ba4true\n    emptyOutDir: true,\n  },\n  define: {\n    "process.env": process.env,\n  },\n});\n')),(0,o.kt)("h2",{id:"4envdevelopment"},"4..env.development"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"NODE_ENV=dev\nVITE_APP_API_URL=http://localhost:8080/\n")),(0,o.kt)("h2",{id:"5typingdts"},"5.typing.d.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { ComponentCustomProperties } from \"@vue/runtime-core\";\nimport { MessageApi } from \"ant-design-vue/lib/message\";\nimport { StoreType } from \"store2\";\n\n// \u58f0\u660e window \u4e0a\u81ea\u5b9a\u4e49\u5c5e\u6027\uff0c\u5982\u4e8b\u4ef6\u603b\u7ebf\ndeclare interface Window {\n    eventBus: any;\n  }\n\n// \u58f0\u660e .vue \u6587\u4ef6\ndeclare module '*.vue' {\n  import { DefineComponent } from 'vue';\n  const component: DefineComponent<object, object, any>;\n  export default component;\n}\n// ts\u58f0\u660e\u5168\u5c40\u53c2\u6570,\u4e0d\u7136this\u4f1a\u62a5\u4e0d\u5b58\u5728\u5c5e\u6027\ndeclare module '@vue/runtime-core' {\n  interface ComponentCustomProperties {\n      $message: MessageApi; // \u8fd9\u91cc\u586b\u7c7b\u578b\n      $localStore:StoreType\n  }\n}\n")),(0,o.kt)("h2",{id:"6maints"},"6.main.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { createApp } from "vue";\nimport "./style.css";\nimport { createPinia } from "pinia";\nimport piniaPluginPersist from "pinia-plugin-persist";\nimport router from "./router";\nimport AppVue from "./App.vue";\nimport "ant-design-vue/dist/antd.css";\nimport "element-plus/dist/index.css";\nimport { Button, message } from "ant-design-vue";\nimport "./utils/ajaxUtil";\nimport localStore from "store2";\n\nconst pinia = createPinia();\npinia.use(piniaPluginPersist);\n\nconst app = createApp(AppVue);\napp.use(router);\napp.use(pinia);\napp.use(Button);\n\nmessage.config({\n  maxCount: 1,\n});\napp.config.globalProperties.$message = message;\napp.config.globalProperties.$localStore = localStore;\napp.config.globalProperties.$testMsg = "testMsg";\napp.mount("#app");\n')),(0,o.kt)("h2",{id:"7routesindexts"},"7.routes/index.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { createRouter, createWebHashHistory } from "vue-router";\nimport routes from "./routes";\nimport { message } from "ant-design-vue";\nconst router = createRouter({\n  history: createWebHashHistory(),\n  routes,\n});\n//\u5168\u5c40\u524d\u7f6e\u8def\u7531\u5b88\u536b\u2014\u2014\u2014\u2014\u521d\u59cb\u5316\u7684\u65f6\u5019\u88ab\u8c03\u7528\u3001\u6bcf\u6b21\u8def\u7531\u5207\u6362\u4e4b\u524d\u88ab\u8c03\u7528\nrouter.beforeEach((to, from, next) => {\n  localStorage.setItem("path", to.path);\n  const hide = message.loading(\'\u52a0\u8f7d\u4e2d\xb7\xb7\xb7\');\n  //\u5982\u679c\u8def\u7531\u9700\u8981\u8df3\u8f6c\n  if (to.meta.isAuth) {\n    //\u5224\u65ad \u5982\u679cuser-status\u672c\u5730\u5b58\u50a8\u662flogin\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u8fdb\u53bb\n    if (localStorage.getItem("user-status") === "login") {\n      hide();\n      next(); //\u653e\u884c\n    } else {\n      // next(); //\u653e\u884c\n      alert("\u62b1\u6b49\uff0c\u60a8\u65e0\u6743\u9650\u67e5\u770b\uff01");\n      next("/login"); //\u653e\u884c\n      setTimeout(() => {\n        hide();\n        location.reload();\n      }, 1000);\n      // location.reload();\n    }\n  } else {\n    // \u5426\u5219\uff0c\u653e\u884c\n    next();\n  }\n});\n//\u5168\u5c40\u540e\u7f6e\u8def\u7531\u5b88\u536b\u2014\u2014\u2014\u2014\u521d\u59cb\u5316\u7684\u65f6\u5019\u88ab\u8c03\u7528\u3001\u6bcf\u6b21\u8def\u7531\u5207\u6362\u4e4b\u540e\u88ab\u8c03\u7528\nrouter.afterEach((to, from) => {\n  (document as any).title = to.meta.title || "\u9ed8\u8ba4\u540d"; //\u4fee\u6539\u7f51\u9875\u7684title\n});\nexport default router;\n')),(0,o.kt)("h2",{id:"8usestorets"},"8.useStore.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { defineStore } from "pinia";\n\nexport const useNoiseStatistics = defineStore({\n  id: "counter",\n  state: () => ({}),\n  getters: {},\n  actions: {},\n});\n')),(0,o.kt)("h2",{id:"9example"},"9.example"),(0,o.kt)("h3",{id:"91-no-setup"},"9.1 no setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"title='no setup'",title:"'no","setup'":!0},'<script lang="ts">\nimport { useMainStore } from "@/store/useMainStore";\nimport { mapWritableState, mapActions } from "pinia";\nexport default {\n  setup() {},\n  data: () => ({\n    testData: "test",\n  }),\n  computed: {\n    ...mapWritableState(useMainStore, {\n      hello2: "helloPinia",\n      name2: "name",\n      loading: "loading",\n      newName: "newName",\n    }),\n    hello() {\n      return this.hello2;\n    },\n  },\n  methods: {\n    ...mapActions(useMainStore, ["changeHello2", "changeHello", "setUser"]),\n    changePinia() {\n      this.hello2 = "test";\n    },\n    actionTest1() {\n      this.changeHello();\n    },\n    actionTest2() {\n      this.changeHello2();\n    },\n    reset() {\n      // this.$s\n    },\n  },\n};\n<\/script>\n\n<template>\n  <hr />\n  <div>\u5f02\u6b65\u6d4b\u8bd5</div>\n  <p>{{ testData }}</p>\n  <hr />\n  <div class="pinia">\n    <p>setup:{{ hello }}</p>\n    <p>nosetup:{{ hello2 }}</p>\n    <p>async set:{{ name2 || "notSet" }}</p>\n    <p>async getter:{{ newName || "notSet" }}</p>\n    <div>\n      <button @click="changePinia">state change pinia</button>\n      <button @click="actionTest1">setUp change pinia</button>\n      <button @click="actionTest2">mapAction change pinia</button>\n      <button @click="setUser">{{ !loading ? "async" : "loading\xb7\xb7\xb7" }}</button>\n      <hr />\n      <button @click="reset">\u91cd\u7f6e</button>\n    </div>\n  </div>\n</template>\n\n<style></style>\n\n')),(0,o.kt)("h3",{id:"92-setup"},"9.2 setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"title='setup'",title:"'setup'"},'<script lang="ts" setup>\nimport { getCurrentInstance } from "vue";\nimport { PoweroffOutlined } from "@ant-design/icons-vue";\n// import { useNewsStore } from "@/store/useNewsStore";\n// import { storeToRefs } from "pinia";\n\n// console.log("vue-env", import.meta.env, import.meta.env.VITE_APP_TAG);\nconst { proxy } = getCurrentInstance() as any;\n// const newsStore = useNewsStore();\n// const { user } = storeToRefs(newsStore);\n// newsStore.setUser();\n// const input = ref("");\nconst test = () => {\n  proxy?.$message.error("\u8fd9\u662f\u4e00\u4e2a\u6d4b\u8bd5");\n};\n<\/script>\n\n<template>\n  <a-button type="primary" @click="test">\n    <template #icon><PoweroffOutlined /></template>\n    \u4e3b\u9875</a-button\n  >\n</template>\n')))}c.isMDXComponent=!0}}]);