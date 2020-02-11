import { Storage } from './storage.service'
import { getCurrentTimestamp } from '../helpers/utils'
import Http from './http.service'

const storageKey = {
  user: 'user',
  token: '__token',
  expired: 'expired_at'
}

export const authenticate = credentials => Http.post('auth/login', credentials)

export const register = data => Http.post('auth/register', data)

export const logout = () => Http.post('auth/logout')

export const setLoggedIn = data => {
  setUser(data.user)
  setAuthToken(data.token)
  setExpiryTime(data.expired_at)
}

export const verifyResetToken = token => Http.post(`/auth/verify-reset-token/${token}`)

export const resetPassword = (token, data) => Http.post(`/auth/reset/${token}`, data)

export const sendForgotPasswordLink = data => Http.post('auth/forgot', data)

export const setUser = data => Storage.setJson(storageKey.user, data)

export const setAuthToken = token => Storage.set(storageKey.token, token)

export const setExpiryTime = (seconds = 7200) => Storage.set(storageKey.expired, getCurrentTimestamp() + seconds)

export const getAuthToken = () => Storage.get(storageKey.token)

export const getExpiredAt = () => Storage.get(storageKey.expired)

export const getUser = () => Storage.getJson(storageKey.user)

export const isLoggedIn = () => getAuthToken() && getExpiredAt() > getCurrentTimestamp()

export const clearUser = () => Storage.delete([storageKey.expired, storageKey.token, storageKey.user])