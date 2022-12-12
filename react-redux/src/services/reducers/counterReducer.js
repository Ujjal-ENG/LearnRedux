import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstants";

const initialCounter = { count: 0 };

const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 5,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 3,
      };

    case RESET:
      return {
        count: "",
      };

    default:
      return state;
  }
};

export default counterReducer;
