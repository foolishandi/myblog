import React, { useReducer } from "react";
import DemoContext from "./DemoContext";
import App2 from "./App2";
const App = (props = {}) => {
  const initialState = { num1: 0, num2: 0, num3: 0, render: "" };
  const reducer = (state, action) => {
    // console.log('reducer' ,state,action)
    switch (action.type) {
      case "num1Add":
        return Object.assign(
          {},
          state,
          { num1: state.num1 + 1 },
          { render: action.payload }
        );
      case "num2Add":
        return {
          ...state,
          render: action.payload,
          num2: state.num2 + 1,
        };

      case "num3Add":
        return {
          ...state,
          render: action.payload,
          num3: state.num1 + state.num2,
        };
      case "numAdd":
        return {
          ...state,
          render: action.payload,
          num1: state.num1 + 2,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ backgroundColor: "yellow", padding: 5 }}>
      爷爷 :<span>state:{JSON.stringify(state)}</span>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "numAdd", payload: "爷爷render" });
          }}
        >
          num1 + 2
        </button>
      </div>
      {/* 传递状态 */}
      <DemoContext.Provider value={{ state, dispatch }}>
        <App2></App2>
      </DemoContext.Provider>
    </div>
  );
};

export default App;
