---
sidebar_position: 1
---

> `useEffect Hook` 看做 `componentDidMount`，`componentDidUpdate` 和 `componentWillUnmount` 这三个函数的组合

## 1.使用

```js
useEffect(()=>{
    // 页面绘制**渲染后**做些事情，比如请求网络，操作dom
    dosomething()
    return()=>{
        // 相当于componentWillUnmount时机
        dosomething()
    }
},[]) //依赖数组，根据里面的值进行更新，如果没有数组参数，会每次更新，可能导致死循环

```

## 2.useLayoutEffect

```js
useLayoutEffect(()=>{
    // 它会在所有的 DOM 变更之后，再同步调用 effect。
    // 可以使用它来读取 DOM 布局并同步触发重渲染。
    dosomething()
    return()=>{
        // 相当于componentWillUnmount时机
        dosomething()
    }
},[]) //依赖数组，根据里面的值进行更新，如果没有数组参数，会每次更新，可能导致死循环

```

## 3.异步使用async/await

> 注意：不能直接使用 `useEffect(async ()=>{},[])`
>> 基本原因: `useEffect`第一个参数`(fn)`需返回的是`清除副作用函数`，但是`async`的返回是`promise`
``` js
useEffect(() => {
    // 使用IIFE，或者自己用 async fn包装一下，再执行
    (async function anyNameFunction() {
        await dosomething();
    })();
}, []);

```
