## 封装通用实例

```js
import axios from "axios";
import { message } from "antd";
import Cookies from "js-cookie";
// console.log(process.env);
const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:8080/" : "/",
  timeout: 10 * 1000,
});
// 2.请求拦截器
service.interceptors.request.use(
  (config) => {
    //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    config.data = JSON.stringify(config.data); //数据转化,也可以使用qs转换
    //如有需要：注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
    const token = Cookies.get("accessToken"); //这里取token之前，你肯定需要先拿到token,存一下
    if (token) {
      // config.params = { token: token }; //如果要求携带在参数中
      config.headers.Authorization = token; //如果要求携带在请求头中
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// 3.响应拦截器
service.interceptors.response.use(
  (response) => {
    //接收到响应数据并成功后的一些共有的处理，关闭loading等

    return response;
  },
  (error) => {
    /***** 接收到异常响应的处理开始 *****/
    if (error && error.response) {
      // 1.公共错误处理
      // 2.根据响应码具体处理
      switch (error.response.status) {
        case 400:
          error.message = "错误请求";
          break;
        case 401:
          error.message = "未授权，请重新登录";
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = "请求错误,未找到该资源";
          window.location.href = "/NotFound";
          break;
        case 405:
          error.message = "请求方法未允许";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器端出错";
          break;
        case 501:
          error.message = "网络未实现";
          break;
        case 502:
          error.message = "网络错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网络超时";
          break;
        case 505:
          error.message = "http版本不支持该请求";
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      // 超时处理
      if (JSON.stringify(error).includes("timeout")) {
        message.error("服务器响应超时，请刷新当前页");
      }
      error.message = "连接服务器失败";
    }

    message.error(error.message);
    /***** 处理结束 *****/
    //如果不需要错误处理，以上的处理过程都可省略
    return Promise.resolve(error.response);
  }
);
//4.导出文件
export default service;
```

## 限制超时与超时重连

### 简单超时限制

```js
import axios from "axios";

axios.defaults.timeout = 10 * 1000; // 10s
```

### 重连次数限制

```js title='ajaxUtil.js'
//在ajaxUtil.js设置全局的请求次数，请求的间隙
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;
axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
  var config = err.config;
  if (!config || !config.retry) return Promise.reject(err);
  config.__retryCount = config.__retryCount || 0;
  if (config.__retryCount >= config.retry) {
    return Promise.reject(err);
  }
  config.__retryCount += 1;
  var backoff = new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, config.retryDelay || 1);
  });
  return backoff.then(function () {
    return axios(config);
  });
});
```

## 中途取消请求

```js
   import axios from 'axios';

    axios.defaults.timeout = 5000;
    axios.defaults.baseURL ='';

    let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
    let cancelToken = axios.CancelToken;
    let removePending = (ever) => {
        for(let p in pending){
            if(pending[p].u === ever.url + '&'+ ever.method) { //当当前请求在数组中存在时执行函数体
                pending[p].f(); //执行取消操作
                pending.splice(p, 1); //把这条记录从数组中移除
            }
        }
    }

    //http request 拦截器
    axios.interceptors.request.use(
    config => {
      config.data = JSON.stringify(config.data);
      config.headers = {
        'Content-Type':'application/x-www-form-urlencoded'
      }
      // ------------------------------------------------------------------------------------
      removePending(config); //在一个ajax发送前执行一下取消操作
      config.cancelToken = new cancelToken((c)=>{
         // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
         pending.push({ u: config.url + '&'+ config.method, f: c });
      });
      // -----------------------------------------------------------------------------------------
      return config;
    },
    error => {
      return Promise.reject(err);
    }
  );
  //http response 拦截器
  axios.interceptors.response.use(
    response => {
      // ------------------------------------------------------------------------------------------
      removePending(response.config);  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
      // -------------------------------------------------------------------------------------------
      if(response.data.errCode ==2){
        router.push({
          path:"/login",
          querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
        })
      }
      return response;
    },
    error => {
      return Promise.reject(error)
    }
  )
```
