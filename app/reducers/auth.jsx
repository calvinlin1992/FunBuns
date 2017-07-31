import axios from 'axios'

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
    type: AUTHENTICATED, user
})

export const loginFB = () =>
    dispatch =>
        axios.get('/api/auth/login/facebook')
            .then(response => {
                console.log('made it into then, here is response data: ', response.data)
                const theUser = response.data
                dispatch(authenticated(theUser))
            })
            .catch(failed => dispatch(authenticated(null)))

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
