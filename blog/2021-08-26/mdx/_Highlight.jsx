import { Button } from "antd";
import React from "react";
import CodeBlock from "@theme/CodeBlock";
import rowEle from "!!raw-loader!../../../src/pages/index";

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
    <CodeBlock language="jsx" title="/src/pages/index">
      {rowEle}
    </CodeBlock>
  </span>
);
