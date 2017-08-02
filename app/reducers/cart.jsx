import axios from "axios";

/* --------------------- ACTIONS ------------------- */
const LOAD_CART_FROM_SESSION = "LOAD_CART_FROM_SESSION";
const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
const EDIT_PRODUCT_QUANTITY = "EDIT_PRODUCT_QUANTITY";
const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";

/* ------------------ACTION-CREATORS--------------- */
const load = orders => ({ type: LOAD_CART_FROM_SESSION, orders });
const add = product => ({ type: ADD_PRODUCT_TO_CART, product });
const edit = product => ({ type: EDIT_PRODUCT_QUANTITY, product });
const remove = id => ({ type: REMOVE_PRODUCT_FROM_CART, id });

/* --------------------- THUNKS -------------------- */
export const loadCartFromSession = () => {
  console.log("add to cart thunk")
  return dispatch => {
    axios
      .get("/api/cart")
      .then(res => dispatch(load(res.data)))     //dispatch(load(res.data))
      .catch(err => console.error('Failed Loading', err))
  }
}

export const addProductToCart = product => {
  console.log("add product" , product)
  return dispatch => {
    axios
      .post("/api/cart", product)
      .then(res =>  dispatch(add(res.data)))  //
      .catch(err => console.error("Unable to add product", err));
  };
};

export const editProductQuantity = product => {
  return dispatch => {

    axios.put("/api/cart", product).then(res => {
      dispatch(edit(res.data));
    });
  };
};

export const removeProductFromCart = id => {
  console.log("delete from cart " , id)
  return dispatch => {
    axios.delete(`/api/cart/${id}`).then(() => {
      dispatch(remove(id));
    });
  };
};

/* --------------------- REDUCER ------------------- */
export default function reducer(state = [], action) {
  switch (action.type) {
    case LOAD_CART_FROM_SESSION:
      state = action.orders;
      break;

    case ADD_PRODUCT_TO_CART:
      state = [...state, action.orders];
      break;

    case EDIT_PRODUCT_QUANTITY:
      return state.map(product => {
        if (product.id === action.product.id) {
          product.quantity = action.product.quantity;
        }
      });
      break;

    case REMOVE_PRODUCT_FROM_CART:
      state = state.filter(product => {
        return product.id !== action.product.id;
      });
      break;
  }

  return state;
}
