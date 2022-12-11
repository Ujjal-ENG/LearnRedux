//State - count=0
//action - increment,decrement,reset
//reducer
//store

const { createStore } = require("redux");

//CONSTRAINTS
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const ADD_USER = "ADD_USER"

const initialState = {
  users: ["ujjal "],
  count: 0,
};


const addUser = (value) => {
  return {
    type: ADD_USER,
    payload: value
  }
}

const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};

const resetCounterAction = () => {
  return {
    type: RESET,
  };
};

const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

//Now Create The Reducer
// We know reducer take to parameter on is state and one is action

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };

    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 6
      }

    default:
      state;
  }
};

//store

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(incrementCounterByValue(10));
store.dispatch(decrementCounterAction());
store.dispatch(resetCounterAction());

store.dispatch(addUser("Ador"))