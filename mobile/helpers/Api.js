import axios from 'axios'
import { Alert } from 'react-native'
import { getUser, navigate, deleteUser } from '../utils'

const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
})

api.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.request._hasError === true && error.request._response.includes('connect')) {
            Alert.alert(
                'Error',
                'Unable to connect to server!',
                [{ text: 'OK' }],
                { cancelable: false },
            )
        }

        if (error.response.status === 401) {
            const requestConfig = error.config

            deleteUser().then(() => {
                navigate('AuthLoading', {})
            })

            return axios(requestConfig)
        }

        return Promise.reject(error)
    },
)

api.interceptors.request.use(
    config => {
        return getUser()
            .then(user => {
                user = JSON.parse(user)
                if (user && user.token)
                    config.headers.Authorization = `Bearer ${user.token}`
                return Promise.resolve(config)
            })
            .catch(error => {
                console.log(error)
                return Promise.resolve(config)
            })
    },
    error => {
        return Promise.reject(error)
    },
)

export default api