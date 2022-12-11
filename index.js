const { createStore, combineReducers } = require("redux");

//Product Constraints
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

//Cart Constraints
const GET_CARTS = "GET_CARTS";
const ADD_CARTS = "ADD_CARTS";

// productStates
const initialProductState = {
  products: ["sugar", "salt"],
  numberofProducts: 2,
};

// CARTStates
const initialCartState = {
  cart: ["sugar"],
  numberofProducts: 1,
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

//action of Cart State
const getCARTs = () => {
  return {
    type: GET_CARTS,
  };
};

const addCARTs = (cart) => {
  return {
    type: ADD_CARTS,
    payload: cart,
  };
};

//Product Reducer of Action Performed
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
      return state;
  }
};

//Cart Reducer of Action Performed
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CARTS:
      return {
        ...state,
      };
    case ADD_CARTS:
      return {
        cart: [...state.cart, action.payload],
        numberofProducts: state.numberofProducts + 1,
      };

    default:
      return state;
  }
};

//This combined Reducer
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

//Product Stroe
// const store = createStore(productReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(getProducts());
// store.dispatch(addProducts("orange"));

//Combined Store
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts("orange"));

store.dispatch(getCARTs());
store.dispatch(addCARTs("salt"));

//cardReducer
