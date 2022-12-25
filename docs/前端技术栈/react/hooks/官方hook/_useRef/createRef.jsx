import React, { useState, useEffect, createRef, forwardRef } from "react";
const InputRef = ({ defaultValue, max }, ref) => {
  const [value, setvalue] = useState(defaultValue || "");
  return (
    <div style={{ backgroundColor: "rgba(0,0,0,.2)", padding: 5 }}>
      <input
        ref={ref}
        value={value}
        onChange={(e) => {
          setvalue(e.target.value);
        }}
      />
      <span
        onClick={() => {
          setvalue(max);
        }}
      >
        最大
      </span>
    </div>
  );
};
// 函数组件转发
const Input = forwardRef(InputRef);

export default function AsycList() {
  const [refArr, setRefArr] = useState([]); // ref数组
  const [data, setData] = useState([]); // 获取的数据

  // 模拟请求
  const getRefArr = async () => {
    const { data } = await new Promise((resolve, reject) => {
      resolve({
        data: [
          {
            value: 23,
          },
          {
            value: 22,
          },
          {
            value: 2,
          },
        ],
      });
    });
    setData(data);
    const arr = data.map(() => {
      return createRef();
    });
    setRefArr([...arr]);
  };

  useEffect(() => {
    getRefArr();
  }, []);
  return (
    <div style={{ backgroundColor: "yellow", padding: 10 }}>
      {refArr?.map((item, index) => (
        <div key={JSON.stringify(data[index])}>
          <Input
            ref={item}
            defaultValue={data[index].value}
            max={data[index].value}
          ></Input>
          <div>
            <button onClick={() => console.log(item.current)}>测试</button>
            <span>ref:{JSON.stringify({})}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
