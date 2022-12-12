//try to build async actions - api calling
// api url - https://jsonplaceholder.typicode.com/todos
//middleware - redux-thunk
// axios api

//constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";

//States
const initialTodoState = {
  todos: [],
  isLoading: false,
  error: null,
};

//creating the action

const getTodoRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

const getTodoSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};

const getTodoFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};


//reducers
const todosReducer = (state=initialTodoState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload
      }
    
    case GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
  
    default:
      state
  }
}