
- 批量更新表单数据state
```js
 const [value, setValue] = useState({
    name: "",
    email: "",
    psw: "",
  });
  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  ...
  <Input name="name" value={value.name} onChange={handleChange}></Input>
  ···
```
> <a href='/react/formBatchUpdate' target='_blank'>点击此处见测试页面</a> 