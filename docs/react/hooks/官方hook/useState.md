---
sidebar_position: 1
---

## 基本使用
### 1.创建

``` js 
const [state, setState] = useState(initialState);

const [state, setState] = useState(() => {
  // 对props进行复杂逻辑处理 
  const initialState = handel(props);
  return initialState;
});

```

### 2.更新

``` js
setState({...updatedValues});

// 通过旧状态更新
setState(prevState => {
  // 也可以使用 Object.assign
  return {...prevState, ...updatedValues};
});
```

### 3.自定义相关hook

> 部分原理 : `useRef`可以在其`.current`上保存一个可变值对象，包括`数据`或者`dom等节点`


#### 3.1获取旧值state
```js
// 定义
import { useRef, useEffect } from 'react';

// 记录旧值的公用hooks
export default function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
// 使用
 const [currentMarker, setCurrentMarker] = useState({}); // 当前激活的值
 const prevMarkerRef = usePrevious(currentMarker); // 上一个激活的值

```

#### 3.2模拟类组件的this.setState的回调hook
```js
// 定义
import { useEffect, useRef, useState } from 'react'
const useCallBackState = (initState) => {
	const [state, setState] = useState(initState)
	const isUpdate = useRef()
	const setCallBackState = (state, cb) => {
		setState((preValue) => {
			isUpdate.current = cb
			return typeof state === 'function' ? state(preValue) : state
		})
	}
	useEffect(() => {
		if (isUpdate.current) {
			// 不设置回调函数的话 isUpdate.current 是undefined,所以不会执行
			isUpdate.current(state)
		}
	}, [state])
 
	return [state, setCallBackState]
}
 
export default useCallBackState

// 使用
const [state,setState]=useCallBackState(0)

setState(5,(current)=>{
    最新状态处理
    handel(current);
})
```