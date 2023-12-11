"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{30010:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"mdx-blog-post","metadata":{"permalink":"/blog/mdx-blog-post","editUrl":"https://github.com/foolishandi/myblog/tree/main/blog/2022-11-02/index.mdx","source":"@site/blog/2022-11-02/index.mdx","title":"mdx\u535a\u5ba2\u793a\u4f8b","description":"md \u6587\u6863\u4e0e jsx \u6df7\u5199\u8bb0\u5f55\uff0c\u5177\u4f53\u4f7f\u7528\u89c1\uff1amdx \u793a\u4f8b","date":"2022-11-02T00:00:00.000Z","formattedDate":"2022\u5e7411\u67082\u65e5","tags":[{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.22,"hasTruncateMarker":false,"authors":[{"name":"fool","title":"user","url":"https://github.com/foolishandi","imageURL":"https://github.com/endiliey.png","key":"foolishandi"}],"frontMatter":{"slug":"mdx-blog-post","title":"mdx\u535a\u5ba2\u793a\u4f8b","authors":["foolishandi"],"tags":["docusaurus"]},"nextItem":{"title":"\u521d\u59cb\u5316","permalink":"/blog/init"}},"content":"md \u6587\u6863\u4e0e jsx \u6df7\u5199\u8bb0\u5f55\uff0c\u5177\u4f53\u4f7f\u7528\u89c1\uff1a[mdx \u793a\u4f8b](/mdx)\\r\\n\\r\\n:::tip\\r\\n\\r\\nUse the power of React to create interactive blog posts.\\r\\n\\r\\n```js\\r\\n<button onClick={() => alert(\\"button clicked!\\")}>Click me!</button>\\r\\n```\\r\\n\\r\\n<button onClick={() => alert(\\"button clicked!\\")}>Click me!</button>\\r\\n\\r\\n:::"},{"id":"init","metadata":{"permalink":"/blog/init","editUrl":"https://github.com/foolishandi/myblog/tree/main/blog/2021-08-26/index.md","source":"@site/blog/2021-08-26/index.md","title":"\u521d\u59cb\u5316","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"2021\u5e748\u670826\u65e5","tags":[{"label":"facebook","permalink":"/blog/tags/facebook"},{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"fool","title":"user","url":"https://github.com/foolishandi","imageURL":"https://github.com/endiliey.png","key":"foolishandi"}],"frontMatter":{"slug":"init","title":"\u521d\u59cb\u5316","authors":["foolishandi"],"tags":["facebook","hello","docusaurus"]},"prevItem":{"title":"mdx\u535a\u5ba2\u793a\u4f8b","permalink":"/blog/mdx-blog-post"},"nextItem":{"title":"mdx\u793a\u4f8b","permalink":"/blog/2021/08/26/mdx"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\r\\n\\r\\nSimply add Markdown files (or folders) to the `blog` directory.\\r\\n\\r\\nRegular blog authors can be added to `authors.yml`.\\r\\n\\r\\nThe blog post date can be extracted from filenames, such as:\\r\\n\\r\\n- `2019-05-30-welcome.md`\\r\\n- `2019-05-30-welcome/index.md`\\r\\n\\r\\nA blog post folder can be convenient to co-locate blog post images:\\r\\n\\r\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\r\\n\\r\\nThe blog supports tags as well!\\r\\n\\r\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"/2021/08/26/mdx","metadata":{"permalink":"/blog/2021/08/26/mdx","editUrl":"https://github.com/foolishandi/myblog/tree/main/blog/2021-08-26/mdx/index.mdx","source":"@site/blog/2021-08-26/mdx/index.mdx","title":"mdx\u793a\u4f8b","description":"","date":"2021-08-26T00:00:00.000Z","formattedDate":"2021\u5e748\u670826\u65e5","tags":[],"readingTime":2,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"mdx\u793a\u4f8b"},"prevItem":{"title":"\u521d\u59cb\u5316","permalink":"/blog/init"}},"content":"import Highlight from \\"./_Highlight.jsx\\";\\r\\nimport Tabs from \\"@theme/Tabs\\";\\r\\nimport TabItem from \\"@theme/TabItem\\";\\r\\n\\r\\n## 1.\u5f15\u5165\u7ec4\u4ef6\u4ee3\u7801\\r\\n\\r\\n<Highlight color=\\"#25c2a0\\">\u76f4\u63a5\u5f15\u7528\u7ec4\u4ef6\u4ee3\u7801</Highlight>\\r\\n\\r\\n## 2.\u6df7\u7528 mdx\\r\\n\\r\\n**Markdown** \u4e0e <code>jsx</code> \u6df7\u7528\\r\\n\\r\\n- cs\\r\\n- fdfgdfg\\r\\n\\r\\n- [x] fdsfs\\r\\n\\r\\n> \u4e00\u7ea7\u5f15\u7528\\r\\n>\\r\\n> > \u4e8c\u7ea7\u5f15\u7528\\r\\n> >\\r\\n> > > \u4e09\u7ea7\u5f15\u7528\\r\\n> > >\\r\\n> > > > \u56db\u7ea7\u5f15\u7528\\r\\n> > > >\\r\\n> > > > > \u4e94\u7ea7\u5f15\u7528\\r\\n> > > > >\\r\\n> > > > > > \u516d\u7ea7\u5f15\u7528\\r\\n\\r\\n//\u65e0\u5e8f\u5217\u8868\u5d4c\u5957\\r\\n\\r\\n- 123\\r\\n  - abc\\r\\n  - bcd\\r\\n  - cde\\r\\n- 465\\r\\n- 789\\r\\n  //\u6709\u5e8f\u5217\u8868\u5d4c\u5957\\r\\n\\r\\n1. abcd\\r\\n   1. abcde\\r\\n   2. abcde\\r\\n   3. abcde\\r\\n2. bcde\\r\\n3. cdef\\r\\n\\r\\n`shaoliangdaima,danhangshiyong`\\r\\n\\r\\n[\u7b80\u4e66]: https://www.jianshu.com \\"\u521b\u4f5c\u4f60\u7684\u521b\u4f5c\\"\\r\\n\\r\\n---\\r\\n\\r\\n### \u8868\u683c\\r\\n\\r\\n| 123 | 234 | 345 |\\r\\n| :-- | :-: | --: |\\r\\n| abc | bcd | cde |\\r\\n| abc | bcd | cde |\\r\\n| abc | bcd | cde |\\r\\n\\r\\n### tab \u680f\\r\\n\\r\\n<Tabs\\r\\n  defaultValue=\\"orange\\"\\r\\n  values={[\\r\\n    { label: \\"Apple\\", value: \\"apple\\" },\\r\\n    { label: \\"Orange\\", value: \\"orange\\" },\\r\\n    { label: \\"Banana\\", value: \\"banana\\" },\\r\\n  ]}\\r\\n>\\r\\n  <TabItem value=\\"apple\\" label=\\"Apple\\" default>\\r\\n    This is an apple \ud83c\udf4e\\r\\n  </TabItem>\\r\\n  <TabItem value=\\"orange\\" label=\\"Orange\\">\\r\\n    This is an orange \ud83c\udf4a\\r\\n  </TabItem>\\r\\n  <TabItem value=\\"banana\\" label=\\"Banana\\">\\r\\n    This is a banana \ud83c\udf4c\\r\\n  </TabItem>\\r\\n</Tabs>\\r\\n\\r\\n<Tabs groupId=\\"operating-systems\\">\\r\\n  <TabItem value=\\"win\\" label=\\"Windows\\">\\r\\n    Use Ctrl + C to copy.\\r\\n  </TabItem>\\r\\n  <TabItem value=\\"mac\\" label=\\"macOS\\">\\r\\n    Use Command + C to copy.\\r\\n  </TabItem>\\r\\n</Tabs>\\r\\n\\r\\n<Tabs groupId=\\"operating-systems\\">\\r\\n  <TabItem value=\\"win\\" label=\\"Windows\\">\\r\\n    I am Windows.\\r\\n  </TabItem>\\r\\n  <TabItem value=\\"mac\\" label=\\"macOS\\">\\r\\n    I am macOS.\\r\\n  </TabItem>\\r\\n  <TabItem value=\\"linux\\" label=\\"Linux\\">\\r\\n    I am Linux.\\r\\n  </TabItem>\\r\\n</Tabs>\\r\\n\\r\\n## 3.\u5728\u7ebf\u5b9e\u65f6\u7f16\u8f91\u5668\\r\\n\\r\\n```jsx title=\\"/src/suport/index\\" {1,4-6,11} showLineNumbers live\\r\\n// highlight-next-line\\r\\nfunction Clock(props) {\\r\\n  const [date, setDate] = useState(new Date());\\r\\n  useEffect(() => {\\r\\n    var timerID = setInterval(() => tick(), 1000);\\r\\n\\r\\n    return function cleanup() {\\r\\n      clearInterval(timerID);\\r\\n    };\\r\\n  });\\r\\n\\r\\n  function tick() {\\r\\n    setDate(new Date());\\r\\n  }\\r\\n\\r\\n  return (\\r\\n    <div>\\r\\n      <h2>It is {date.toLocaleTimeString()}.</h2>\\r\\n    </div>\\r\\n  );\\r\\n}\\r\\n```\\r\\n\\r\\n```jsx live noInline\\r\\nconst project = \\"Docusaurus\\";\\r\\n\\r\\nconst Greeting = () => <p>Hello {project}!</p>;\\r\\n\\r\\nfunction MyPlayground(props) {\\r\\n  return (\\r\\n    <div>\\r\\n      <div onClick={() => alert(\\"hey!\\")}>Click me</div>\\r\\n    </div>\\r\\n  );\\r\\n}\\r\\nrender(<MyPlayground />);\\r\\n```\\r\\n\\r\\n## 4.\u7f8e\u4eba\u9c7c\u56fe\\r\\n\\r\\n```mermaid\\r\\ngraph TD;\\r\\n    A--\x3eB;\\r\\n    A--\x3eC;\\r\\n    B--\x3eD;\\r\\n    C--\x3eD;\\r\\n```\\r\\n\\r\\n## 5.CodeSandBox\\r\\n\\r\\n<iframe\\r\\n  src={\\r\\n    \\"https://codesandbox.io/p/github/foolishandi/dva/main?import=true&embed=1&file=%2F.editorconfig\\"\\r\\n  }\\r\\n  style={{\\r\\n    width: \\"100%\\",\\r\\n    height: \\"500px\\",\\r\\n    border: \\"0\\",\\r\\n    borderRadius: \\"4px\\",\\r\\n    overflow: \\"hidden\\",\\r\\n  }}\\r\\n  title={\\"foolishandi/dva/main\\"}\\r\\n  allow=\\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\\"\\r\\n  sandbox=\\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\\"\\r\\n></iframe>"}]}')}}]);