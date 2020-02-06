import { Storage } from './storage.service'
import { getCurrentTimestamp } from '../helpers/utils'

const storageKey = {
  user: 'user',
  token: '__token',
  expired: 'expired_at'
}

const staticSuccessResponse = {
  user: {
    id: 1,
    name: 'Manvir',
    email: 'manvir.singh@test.com',
  },
  token: '______token'
}

export const authenticate = credentials => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(staticSuccessResponse)
    }, 1000)
  })
}

export const register = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({message: 'User Registered'})
      // reject({message: 'Something Went Wrong'})
    }, 4000)
  })
}

export const logout = () => {
  return new Promise((resolve, reject) => {
    resolve({ data: 'Logged Out' })
  })
}

export const setLoggedIn = data => {
  setUser(data.user)
  setAuthToken(data.token)
  setExpiryTime(data.expired_at)
}

export const setUser = data => Storage.setJson(storageKey.user, data)

export const setAuthToken = token => Storage.set(storageKey.token, token)

export const setExpiryTime = (seconds = 7200) => Storage.set(storageKey.expired, getCurrentTimestamp() + seconds)

export const getAuthToken = () => Storage.get(storageKey.token)

export const getExpiredAt = () => Storage.get(storageKey.expired)

export const getUser = () => Storage.getJson(storageKey.user)

export const isLoggedIn = () => getAuthToken() && getExpiredAt() > getCurrentTimestamp()

export const clearUser = () => Storage.delete([storageKey.expired, storageKey.token, storageKey.user])