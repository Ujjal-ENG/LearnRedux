const { createStore } = require("redux");

//State
const initialCounterState = {
  count: 0
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
        count: state.count + 2,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      state;
  }
};

//create store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch Action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());


