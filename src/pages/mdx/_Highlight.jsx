import { Button } from "antd";
import React from "react";
import CodeBlock from "@theme/CodeBlock";
import rowEle from "!!raw-loader!../support/index";

export default ({ children, color }) => (
  // highlight-next-line
  <span
    style={{
      backgroundColor: color,
      borderRadius: "2px",
      color: "#fff",
      padding: "0.2rem",
    }}
  >
    {children}
    <Button type="ghost">测试</Button>
    <CodeBlock language="jsx">{rowEle}</CodeBlock>
  </span>
);
