"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2512],{2534:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(4940);const l=e=>{let{children:t,color:a}=e;return n.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t,n.createElement(r.Z,{language:"jsx",title:"/src/pages/index"},'import React from "react";\r\nimport clsx from "clsx";\r\nimport Link from "@docusaurus/Link";\r\nimport useDocusaurusContext from "@docusaurus/useDocusaurusContext";\r\nimport Layout from "@theme/Layout";\r\nimport HomepageFeatures from "@site/src/components/HomepageFeatures";\r\n\r\nimport styles from "./index.module.css";\r\nimport SearchBarWrapper from "../theme/SearchBar";\r\n\r\nfunction HomepageHeader() {\r\n  const { siteConfig } = useDocusaurusContext();\r\n  return (\r\n    <header className={clsx("hero hero--primary", styles.heroBanner)}>\r\n      <div className="container">\r\n        <h1 className="hero__title">{siteConfig.title}</h1>\r\n        <p className="hero__subtitle">{siteConfig.tagline}</p>\r\n        <div className={styles.buttons}>\r\n          <Link\r\n            className="button button--secondary button--lg"\r\n            to="/docs/intro"\r\n          >\r\n            JUST GONE FOR 5MIN \u23f1\ufe0f\r\n          </Link>\r\n        </div>\r\n      </div>\r\n      <SearchBarWrapper></SearchBarWrapper>\r\n    </header>\r\n  );\r\n}\r\n\r\nexport default function Home() {\r\n  const { siteConfig } = useDocusaurusContext();\r\n  return (\r\n    <Layout\r\n      title={`Hello from ${siteConfig.title}`}\r\n      description="Description will go into a meta tag in <head />"\r\n    >\r\n      <HomepageHeader />\r\n      <main>\r\n        <HomepageFeatures />\r\n      </main>\r\n    </Layout>\r\n  );\r\n}\r\n'))}},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),s=a(7094),u=a(2466);const m="tabList__CuJ",c="tabItem_LNqP";function p(e){const{lazy:t,block:a,defaultValue:o,values:p,groupId:d,className:k}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,i.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===o?o:o??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:f}=(0,s.U)(),[x,y]=(0,r.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=d){const e=v[d];null!=e&&e!==x&&h.some((t=>t.value===e))&&y(e)}const C=e=>{const t=e.currentTarget,a=T.indexOf(t),n=h[a].value;n!==x&&(I(t),y(n),null!=d&&f(d,String(n)))},w=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]??T[T.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},k)},h.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:w,onClick:C},o,{className:(0,l.Z)("tabs__item",c,o?.className,{"tabs__item--active":x===t})}),a??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,o.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},52:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(2534),o=a(5488),i=a(5162);const s={title:"mdx\u793a\u4f8b"},u=void 0,m={permalink:"/blog/2021/08/26/mdx",editUrl:"https://github.com/foolishandi/myblog/tree/main/blog/2021-08-26/mdx/index.mdx",source:"@site/blog/2021-08-26/mdx/index.mdx",title:"mdx\u793a\u4f8b",description:"",date:"2021-08-26T00:00:00.000Z",formattedDate:"2021\u5e748\u670826\u65e5",tags:[],readingTime:1.805,hasTruncateMarker:!1,authors:[],frontMatter:{title:"mdx\u793a\u4f8b"},prevItem:{title:"\u521d\u59cb\u5316",permalink:"/blog/init"}},c={authorsImageUrls:[]},p=[{value:"1.\u5f15\u5165\u7ec4\u4ef6\u4ee3\u7801",id:"1\u5f15\u5165\u7ec4\u4ef6\u4ee3\u7801",level:2},{value:"2.\u6df7\u7528 mdx",id:"2\u6df7\u7528-mdx",level:2},{value:"\u8868\u683c",id:"\u8868\u683c",level:3},{value:"tab \u680f",id:"tab-\u680f",level:3},{value:"3.\u5728\u7ebf\u5b9e\u65f6\u7f16\u8f91\u5668",id:"3\u5728\u7ebf\u5b9e\u65f6\u7f16\u8f91\u5668",level:2},{value:"4.\u7f8e\u4eba\u9c7c\u56fe",id:"4\u7f8e\u4eba\u9c7c\u56fe",level:2}],d={toc:p};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u5f15\u5165\u7ec4\u4ef6\u4ee3\u7801"},"1.\u5f15\u5165\u7ec4\u4ef6\u4ee3\u7801"),(0,r.kt)(l.Z,{color:"#25c2a0",mdxType:"Highlight"},"\u76f4\u63a5\u5f15\u7528\u7ec4\u4ef6\u4ee3\u7801"),(0,r.kt)("h2",{id:"2\u6df7\u7528-mdx"},"2.\u6df7\u7528 mdx"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Markdown")," \u4e0e ",(0,r.kt)("code",null,"jsx")," \u6df7\u7528"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fdfgdfg")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","fdsfs"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e00\u7ea7\u5f15\u7528"),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"\u4e8c\u7ea7\u5f15\u7528"),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"\u4e09\u7ea7\u5f15\u7528"),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"\u56db\u7ea7\u5f15\u7528"),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"\u4e94\u7ea7\u5f15\u7528"),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"\u516d\u7ea7\u5f15\u7528"))))))),(0,r.kt)("p",null,"//\u65e0\u5e8f\u5217\u8868\u5d4c\u5957"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"123",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"abc"),(0,r.kt)("li",{parentName:"ul"},"bcd"),(0,r.kt)("li",{parentName:"ul"},"cde"))),(0,r.kt)("li",{parentName:"ul"},"465"),(0,r.kt)("li",{parentName:"ul"},"789\n//\u6709\u5e8f\u5217\u8868\u5d4c\u5957")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"abcd",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"abcde"),(0,r.kt)("li",{parentName:"ol"},"abcde"),(0,r.kt)("li",{parentName:"ol"},"abcde"))),(0,r.kt)("li",{parentName:"ol"},"bcde"),(0,r.kt)("li",{parentName:"ol"},"cdef")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"shaoliangdaima,danhangshiyong")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u8868\u683c"},"\u8868\u683c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"123"),(0,r.kt)("th",{parentName:"tr",align:"center"},"234"),(0,r.kt)("th",{parentName:"tr",align:"right"},"345"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"abc"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bcd"),(0,r.kt)("td",{parentName:"tr",align:"right"},"cde")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"abc"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bcd"),(0,r.kt)("td",{parentName:"tr",align:"right"},"cde")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"abc"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bcd"),(0,r.kt)("td",{parentName:"tr",align:"right"},"cde")))),(0,r.kt)("h3",{id:"tab-\u680f"},"tab \u680f"),(0,r.kt)(o.Z,{defaultValue:"orange",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"apple",label:"Apple",default:!0,mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,r.kt)(i.Z,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,r.kt)(i.Z,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Use Ctrl + C to copy."),(0,r.kt)(i.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use Command + C to copy.")),(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"I am Windows."),(0,r.kt)(i.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"I am macOS."),(0,r.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},"I am Linux.")),(0,r.kt)("h2",{id:"3\u5728\u7ebf\u5b9e\u65f6\u7f16\u8f91\u5668"},"3.\u5728\u7ebf\u5b9e\u65f6\u7f16\u8f91\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/suport/index" {1,4-6,11} showLineNumbers live',title:'"/src/suport/index"',"{1,4-6,11}":!0,showLineNumbers:!0,live:!0},"// highlight-next-line\nfunction Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    var timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},'const project = "Docusaurus";\n\nconst Greeting = () => <p>Hello {project}!</p>;\n\nfunction MyPlayground(props) {\n  return (\n    <div>\n      <div onClick={() => alert("hey!")}>Click me</div>\n    </div>\n  );\n}\nrender(<MyPlayground />);\n')),(0,r.kt)("h2",{id:"4\u7f8e\u4eba\u9c7c\u56fe"},"4.\u7f8e\u4eba\u9c7c\u56fe"),(0,r.kt)("mermaid",{value:"graph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;"}))}k.isMDXComponent=!0}}]);