import { Button, Input } from "antd";
import React from "react";
import { useState } from "react";

export default function FormBatchUpdate() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    psw: "",
  });
  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = () => {
    console.log(value);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <label htmlFor="name">姓名：</label>

        <Input name="name" value={value.name} onChange={handleChange}></Input>
      </div>
      <div>
        <label htmlFor="email">电子邮件：</label>

        <Input name="email" value={value.email} onChange={handleChange}></Input>
      </div>
      <div>
        <label htmlFor="psw">密码：</label>

        <Input name="psw" value={value.psw} onChange={handleChange}></Input>
      </div>
      <div className="">
        <Button type="submit" onClick={handleSubmit}>提交</Button>
      </div>
    </div>
  );
}
