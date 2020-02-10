import { authenticate, logout } from "../../services/auth.service"

export const FETCH_LOGIN_START = 'FETCH_LOGIN_START'
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS'
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE'
export const LOGGED_OUT = 'LOGGED_OUT'

const loggedIn = payload => ({
  type: FETCH_LOGIN_SUCCESS,
  payload
})

const loginFailed = error => ({
  type: FETCH_LOGIN_FAILURE,
  error
})

export const login = credentials => {
  return dispatch => {
    dispatch({ type: FETCH_LOGIN_START })
    authenticate(credentials).then(response => {
      dispatch(loggedIn(response.data.data))
    }).catch(err => {
      dispatch(loginFailed(err))
    })
  }
}

export const setLogout = () => {
  return dispatch => {
    logout().then(response => {
      dispatch({ type: LOGGED_OUT })
    })
  }
}