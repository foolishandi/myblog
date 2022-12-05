import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
export default function TabLists({ dataList }) {
  return (
    <Tabs>
      {dataList.map((item) => (
        <TabItem value={item.key} label={item.key}>
          {item.content}
        </TabItem>
      ))}
    </Tabs>
  );
}
