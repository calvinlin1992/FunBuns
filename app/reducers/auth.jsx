import axios from 'axios'

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
    type: AUTHENTICATED, user
})

// SJB, KH: SIGN UP -- naming, maybe belongs in the user reducer
// KH - no local sign up!
// stick to CRUD conventions, REST conventions
export const update = (userObj) =>
    dispatch =>
        axios.put(`/api/auth/update/${userObj.id}`, { userObj })
            .then(() => dispatch(whoami()))
            .catch(() => dispatch(whoami()))

export const login = (username, password) =>
    dispatch =>
        axios.post('/api/auth/login/local',
            { username, password })
            .then(() => dispatch(whoami()))
            .catch(() => dispatch(whoami()))

export const logout = () =>
    dispatch =>
        axios.post('/api/auth/logout')
            .then(() => dispatch(whoami()))
            .catch(() => dispatch(whoami()))

export const whoami = () =>
    dispatch =>
        axios.get('/api/auth/whoami')
            .then(response => {
                const user = response.data
                dispatch(authenticated(user))
            })
            .catch(failed => dispatch(authenticated(null)))

const reducer = (state = null, action) => {
    switch (action.type) {
        case AUTHENTICATED:
            return action.user
    }
    return state
}

export default reducer
