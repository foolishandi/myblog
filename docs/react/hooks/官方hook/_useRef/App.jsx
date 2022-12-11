import React, { forwardRef } from "react";
// 子组件
function Child(props, ref) {
  const inputRef = React.useRef();
  const divRef = React.useRef();
  React.useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    divChange: () => {
      divRef.current.style.backgroundColor = "green";
    },
    a() {
      console.log("a方法");
    },
  }));
  return (
    <div style={{ backgroundColor: "yellow", padding: 5 }} ref={divRef}>
      子组件 : <input ref={inputRef} />
    </div>
  );
}
const FancyInput = forwardRef(Child);

// 父组件
function App() {
  let inputRef = React.useRef();
  function changeText() {
    console.log(inputRef); //{focus: ƒ, a: ƒ}
    inputRef.current.focus(); //input聚焦
    inputRef.current.a();
  }
  return (
    <div style={{ backgroundColor: "rgba(0,0,0,.2)", padding: 5 }}>
      <div>
        <button
          onClick={() => {
            changeText();
          }}
        >
          获取input焦点
        </button>
        <button
          onClick={() => {
            inputRef.current.divChange();
          }}
        >
          改变子组件的div背景色
        </button>
      </div>
      <FancyInput ref={inputRef} />
    </div>
  );
}
export default App;
