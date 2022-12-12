import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstants";

const counterIncrement = () => {
  return {
    type: INCREMENT,
  };
};

const counterDecrement = () => {
  return {
    type: DECREMENT,
  };
};

const counterReset = () => {
  return {
    type: RESET,
  };
};

export { counterDecrement, counterIncrement, counterReset };
