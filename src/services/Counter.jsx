import React, { Fragment, useReducer, useState } from "react";

const Slider = ({ min, max, onChange }) => {
  const [value, setValue] = useState(1);
  const handleChange = (event) => {
    let value = +event.target.value;
    onChange(value);
    setValue(value);
  };
  return (
    <Fragment>
      <span>{value}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </Fragment>
  );
};

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
  UPDATE_STEP: "updateStep",
};
const { INCREMENT, DECREMENT, RESET, UPDATE_STEP } = ACTIONS;

const initialCount = { count: 0, step: 1 };

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + state.step,
        step: state.step,
      };
    case DECREMENT:
      return { count: state.count - state.step, step: state.step };
    case RESET:
      return { count: 0, step: state.step };
    case UPDATE_STEP:
      return { ...state, step: action.step };
    default:
      return new Error("Invalid");
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialCount);

  const handleIncrementCount = () => {
    return dispatch({ type: INCREMENT });
  };

  const handleDecrementCount = () => {
    return dispatch({ type: DECREMENT });
  };

  const handleResetCount = () => {
    return dispatch({ type: RESET });
  };

  return (
    <Fragment>
      <Slider
        min={1}
        max={10}
        onChange={(value) =>
          dispatch({
            type: UPDATE_STEP,
            step: value,
          })
        }
      />
      <hr />
      <span>{state.count}</span>

      <button onClick={handleIncrementCount}>+</button>
      <button
        onClick={handleDecrementCount}
        disabled={state.count < 1 ? true : false}
      >
        -
      </button>
      <button onClick={handleResetCount}>Reset</button>
    </Fragment>
  );
};

export default Counter;
