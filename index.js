const { createStore } = require("redux");

//Constraints
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// productReducer
const initialProductState = {
  products: ["sugar", "salt"],
  numberofProducts: 2,
};

//action of Product State
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

//Reducer of Action Performed
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberofProducts: state.numberofProducts + 1,
      };

    default:
      state;
  }
};

const store = createStore(productReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts("orange"));

//cardReducer
