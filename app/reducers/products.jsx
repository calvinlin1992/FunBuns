import axios from 'axios'

/* --------------------- ACTIONS ------------------- */

const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

/* ------------------ACTION-CREATORS--------------- */
const load = products => ({ type: LOAD_PRODUCTS, products })

/* --------------------- THUNKS -------------------- */
export const loadProducts = () => {
    return (dispatch) => {
        axios.get('api/product')
            .then((products) => {
                dispatch(load(products))
            })
    }
}
/* --------------------- REDUCER ------------------- */
export default function (state = [], action) {
var newState = Object.assign({}, state)

switch (action.type) {
    case 'LOAD_PRODUCTS':
        newState = state.concat(action.products)
        break
    default: return state
}

    return newState;
}