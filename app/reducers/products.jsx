import axios from "axios";

/* --------------------- ACTIONS ------------------- */
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const EDIT_PRODUCT = 'EDIT_PRODUCT';

/* ------------------ACTION-CREATORS--------------- */
const load = products => ({ type: LOAD_PRODUCTS, products });
const add = product => ({ type: ADD_PRODUCT, product });
const edit = product => ({ type: EDIT_PRODUCT, product });
const remove = id => ({ type: REMOVE_PRODUCT, id });


/* --------------------- THUNKS -------------------- */
export const loadProducts = () => {
  return dispatch => {
    axios
      .get("/api/products")
      .then(res => dispatch(load(res.data)))
      .catch(err => console.error("Failed Loading", err));
  };
};


export const addProduct = product => {
  return dispatch => {
    axios
      .post("/api/products", product)
      .then(res => dispatch(add(res.data)))
      .catch(err => console.error("Unable to add product", err));
  };
};

// stay consistent with indentation
export const editProduct = product => {
  return dispatch => {
    axios
      .put(`/api/products/${product.id}`, product)
      .then(res => {
        dispatch(edit(res.data));
      });
  };
};

export const removeProduct = id => {
  return dispatch => {
    axios.delete(`/api/products/${id}`).then(() => {
      dispatch(remove(id));
    });
  };
};

// SB/KH: state can be an object that has all products and selected products
/* --------------------- REDUCER ------------------- */
export default function reducer(state = [], action) {
  switch (action.type) {
    // SJB/KH: make new state, don't assign over the existing state or mutate
    // this is only working because of unusual PASS BY SHARING behavior in JavaScript
    // because JavaScript is not true pass by reference
    case "LOAD_PRODUCTS":
      // just return action.products
      state = action.products;
      break;

    case "ADD_PRODUCT":
      // return [...state, action.product]
      state = [...state, action.product];
      break;

    case "EDIT_PRODUCT":
      state = state.map(product => {
        return product.id === action.product.id ? action.product : product;
      });
      break;

    case "REMOVE_PRODUCT":
      state = state.filter(product => {
        return product.id !== action.product.id;
      });
      break;
  }

  return state;
}
