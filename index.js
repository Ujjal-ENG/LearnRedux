//State
const initialCounterState = {
  count: 0,
  Error: {
    type: Error,
    default: "Something is Wrong there...",
  },
};

//Action -Object -Type or Payload
const incrementCounter = () => {
  return {
    type: "INCREMENT",
  };
};

const decrementCounter = () => {
  return {
    type: "DECREMENT",
  };
};

//Create the reducer for counter
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      break;
  }
};
