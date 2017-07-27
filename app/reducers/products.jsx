import axios from 'axios' // make reducer files look similar -- KHSB

/* --------------------- ACTIONS ------------------- */

const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

/* ------------------ACTION-CREATORS--------------- */
const load = products => ({ type: LOAD_PRODUCTS, products })

/* --------------------- THUNKS -------------------- */
export const loadProducts = () => { // indentation!!! 4 vs 2 space -- KHSB
    return (dispatch) => {
        axios.get('api/product')
            .then((products) => { // make this one line -- KHSB
                dispatch(load(products))
            })
    }
}
// add invalid product type -- add product -- caught an error from the backend -- we display to the user some message and potentially highlight the corresponding error -- KHSB

/* --------------------- REDUCER ------------------- */
export default function (state = [], action) { // initial state of an array?? -- KHSB
var newState = Object.assign({}, state) // indentation?!?!?!?! -- KHSB

switch (action.type) {
    case 'LOAD_PRODUCTS':
        newState = state.concat(action.products) // I would expect replace not concat for loading products. reassigning object to array -- KHSB
        break
    default: return state
}

    return newState;
}