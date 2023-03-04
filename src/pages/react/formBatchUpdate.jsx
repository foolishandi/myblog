import { Button, Input, message } from "antd";
import React from "react";
import { useState } from "react";
import axios from "axios";

axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data.status == 200) {
      //请求成功提示
      message.info({ type: "success", message: response.data.msg });
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  console.log(error)
   if (error && error.response) {//对各种响应码做提示，也可进行其它操作
    switch (error.response.status) {
      case 400:
        message.info( "错误请求" );
        break;
      case 401:
        message.info( "未授权，请重新登录" );
        break;
      case 403:
        message.info( "拒绝访问" );
        break;
      case 404:
        message.info( "未找到该资源" );
        break;
      case 405:
        message.info( "请求方法未允许" );
        break;
      case 408:
        message.info( "请求超时" );
        break;
      case 500:
        message.info( "服务器端出错" );
        break;
      case 501:
        message.info( "网络未实现" );
        break;
      case 502:
        message.info( "网络错误" );
        break;
      case 503:
        message.info( "服务不可用" );
        break;
      case 504:
        message.info( "网络超时" );
        break;
      case 505:
        message.info( "http版本不支持该请求" );
        break;
      default:
        message.info(`'连接错误'${error.response.status}`);
    }
  } else {
    message.info("连接到服务器失败");
  }
  return Promise.reject(error);
});

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
    axios.post('/43434')
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
