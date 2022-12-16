import { createStore } from "redux";
// import thunk from "redux-thunk";
import counterReducer from "./services/reducers/counterReducer";
// import todosReducer from "./services/reducers/todosReducer.js";

const store = createStore(counterReducer);
// const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;
