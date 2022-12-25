import React, { useContext, useMemo, memo } from "react";
import DemoContext from "./DemoContext";
const App3 = memo((props = {}) => {
  const { state, dispatch } = useContext(DemoContext);
  return (
    console.log("孙子render"),
    (
      <div
        style={{
          backgroundColor: "rgba(0,0,0,.2)",
          padding: 5,
        }}
      >
        孙子
        <div>num1 : {state.num1}</div>
        <div>num2 : {state.num2}</div>
        <div>num3 : {state.num3}</div>
        <div>
          <button
            onClick={() => {
              dispatch({ type: "num1Add", payload: "孙子render" });
            }}
          >
            num1 + 1
          </button>
          <button
            onClick={() => {
              dispatch({ type: "num2Add", payload: "孙子render" });
            }}
          >
            num2 + 1
          </button>
          <button
            onClick={() => {
              dispatch({ type: "num3Add", payload: "孙子render" });
            }}
          >
            求和
          </button>
        </div>
      </div>
    )
  );
});

export default App3;
