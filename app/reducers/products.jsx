import axios from 'axios'

/* --------------------- ACTIONS ------------------- */
const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const EDIT_PRODUCT = 'EDIT_PRODUCT'

/* ------------------ACTION-CREATORS--------------- */
const load = products => ({ type: LOAD_PRODUCTS, products })
const add = product => ({ type: ADD_PRODUCT, product })
const edit = product => ({ type: EDIT_PRODUCT, product })
const remove = id => ({ type: REMOVE_PRODUCT, id })

/* --------------------- THUNKS -------------------- */
export const loadProducts = () => {
    return (dispatch) => {
        axios.get('api/products')
            .then((products) => {
                dispatch(load(products))
            })
    }
}

export const addProduct = () => {
    return (dispatch) => {
        axios.post('api/products')
            .then((product) => {
                dispatch(add(product))
            })
    }
}

export const editProduct = () => {
    return (dispatch) => {
        axios.put('api/products/:id')
            .then((product) => {
                dispatch(edit(product))
            })
    }
}

export const removeProduct = () => {
    return (dispatch) => {
        axios.delete('api/products/:id')
            .then(() => {
                dispatch(remove())
            })
    }
}

/* --------------------- REDUCER ------------------- */
export default function(state = [], action) {
    let newState

    switch (action.type) {
        case 'LOAD_PRODUCTS':
            newState = action.products
        break

        case 'ADD_PRODUCT':
            newState = [...state, action.product]
        break

        case 'EDIT_PRODUCT':
            state.map((product) => {
                return product.id === action.product.id ? action.product : product
            })
        break

        case 'REMOVE_PRODUCT':
            state.filter((product) => {
                return product.id !== action.product.id
            })
        break

        default: return state
    }

    return newState
}
