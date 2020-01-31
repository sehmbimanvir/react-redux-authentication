import { Storage } from './storage.service'

const staticSuccessResponse = {
  user: {
    id: 1,
    name: 'Manvir',
    email: 'manvir.singh@netsolutions.com',
  },
  token: '______token'
}

export const authenticate = credentials => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(staticSuccessResponse)
      // reject('Something Went Wrong')
    }, 1000)
  })
}

export const setLoggedIn = data => {
  setUser(data.user)
  setAuthToken(data.token)
  setExpiryTime(data.expired_at)
}

export const setUser = (data) => {
  
}

export const setAuthToken = token => {
  Storage.set('_token', token)
}

export const setExpiryTime = () => {
  const timeStamp = parseInt(Date.now()) + 7200
  console.log('Setting Expiry Time')
  console.log('Current Timestamp', Date.now())
  console.log('New Timestamp', timeStamp)
  Storage.set('expired_at', timeStamp)
}

export const getAuthToken = () => Storage.get('_token')

export const getExpiredAt = () => Storage.get('expired_at')

export const getUser = () => Storage.getJson('user')

export const isLoggedIn = () => {
  return getAuthToken() && parseInt(Date.now()) > getExpiredAt()
}
