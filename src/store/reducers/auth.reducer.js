import {
  FETCH_LOGIN_START,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
  LOGGED_OUT
} from "../actions/auth.action"

import {
  getAuthToken,
  getExpiredAt,
  getUser,
  setLoggedIn,
  clearUser,
  isLoggedIn
} from "../../services/auth.service"

const initialState = {
  token: getAuthToken(),
  expired_at: getExpiredAt(),
  user: getUser(),
  isLoggedIn: isLoggedIn()
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_START:
      return {
        ...state,
        loading: true
      }

    case FETCH_LOGIN_SUCCESS:
      const { payload } = action
      const { user, token } = payload
      const expired_at = getExpiredAt()
      setLoggedIn(payload)
      return { ...state, token, expired_at, user, loading: false, isLoggedIn: true }

    case LOGGED_OUT:
      clearUser()
      return { token: null, expired_at: null, user: {}, successmsg: 'Logged Out Successfully' }

    case FETCH_LOGIN_FAILURE:
      return { ...state, errormsg: action.error, loading: false }

    default:
      return state
  }
}

export default reducer