
## 1.form表单Item重新加载时，状态更新了，但是显示不更新

```js
    <Form.Item label='测试'>
        <Input value={value} onChange={()=>setValue(e.target.value)}></Input>
    </Form.Item>
```

> 解决

```js
    <Form.Item label='测试'>
        <div>
            <Input value={value} onChange={()=>setValue(e.target.value)}></Input>
        </div>
    </Form.Item>
```

## 2.表单子组件放在父组件内部时，如果是全局状态，最好重新设置状态

```jsx
const Father=()=>{

    ...
    const Child=()=>{
        const [state,setState]=useState(''); // 全局状态重新引入
        return ...
    }
}
```