import axios from 'axios'

/* --------------------- ACTIONS ------------------- */
const LOAD_USERS = 'LOAD_USERS'
const REMOVE_USER = 'REMOVE_USER'
const EDIT_USER = 'EDIT_USER'

/* ------------------ACTION-CREATORS--------------- */
const load = users => ({ type: LOAD_USERS, users })
const edit = user => ({ type: EDIT_USER, user })
const remove = id => ({ type: REMOVE_USER, id })

/* --------------------- THUNKS -------------------- */
export const loadUsers = () => {
  return (dispatch) => {
    axios.get('/api/users')
      .then((res) => (dispatch(load(res.data))))
      .catch(err => console.error('Failed Loading Users', err))
  }
}

export const editUser = (user) => {
  return (dispatch) => {
    axios.put(`/api/users/${user.id}`, user)
      .then((res) => {
        dispatch(edit(res.data))
      })
      .catch(err => console.error('Unable to update user', err))

  }
}

export const removeUser = (id) => {
  return (dispatch) => {
    axios.delete(`/api/users/${id}`)
      .then(() => {
        dispatch(remove(id))
      })
      .catch(err => console.error('Failed deleting user', err))
  }
}

/* --------------------- REDUCER ------------------- */
export default function reducer(state = [], action) {

  switch (action.type) {

    case 'USERS':
      state = action.users
      break

    case 'EDIT_USER':
      state = state.map((user) => {
        return user.id === action.user.id ? action.user : user
      })
      break

    case 'REMOVE_USER':
      state = state.filter((user) => {
        return user.id !== action.user.id
      })

  }

  return state
}
