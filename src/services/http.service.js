import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://google.com',
    headers: {
        Authorization: 'Token'
    }
})

export default axiosInstance