---
sidebar_position: 2
---

## 1. [styled-components](https://www.npmjs.com/package/styled-components)

```js
npm i styled-components
```
```js
// Static object
const Box = styled.div({
  background: 'palevioletred',
  height: '50px',
  width: '50px'
});
// A new component based on Button, but with some override styles
const TomatoBox = styled(Box)`
  background: tomato;
`;
// Adapting based on props
const PropsBox = styled.div(props => ({
  background: props.background,
  height: '50px',
  width: '50px'
}));

render(
  <div>
    <Box />
    <TomatoBox />
    <PropsBox background="blue" />
  </div>
);
```