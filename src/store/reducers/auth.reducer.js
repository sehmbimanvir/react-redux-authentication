import { 
  FETCH_LOGIN_START,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE
} from "../actions/auth.action"

import { 
  getAuthToken,
  getExpiredAt,
  getUser,
  setLoggedIn
} from "../../services/auth.service"

const initialState = {
  token: getAuthToken(),
  expired_at: getExpiredAt(),
  user: getUser()
}

const reducer = (state = initialState, action) => {
  if (action.type === FETCH_LOGIN_START) {
    return {
      ...state,
      loading: true
    }
  } else if (action.type === FETCH_LOGIN_SUCCESS) {
    const {payload} = action
    setLoggedIn(payload)
    // setAuthToken(payload.token)
    // setExpiryTime()
    return {
      ...state,
      token: payload.token,
      expired_at: getExpiredAt(),
      user: payload.user,
      loading: false
    }
  } else if (action.type === FETCH_LOGIN_FAILURE) {
    return {
      ...state,
      errormsg: action.error,
      loading: false
    }
  }
  return {...state}
}

export default reducer