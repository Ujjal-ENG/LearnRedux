import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  counterDecrement,
  counterIncrement,
  counterReset,
} from "../services/actions/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterIncrement());
  };
  const handleDECREMENT = () => {
    dispatch(counterDecrement());
  };
  const handleReset = () => {
    dispatch(counterReset());
  };

  return (
    <>
      <h2>Counter App</h2>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDECREMENT}>DECREMENT</button>
      <button onClick={handleReset}>RESET</button>
    </>
  );
};

export default Counter;
