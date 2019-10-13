import axios from 'axios'
import { Notification } from 'element-ui'

const apiFetch = axios.create({
  withCredentials: false,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiFetch.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (process.env.DEV) {
    const notificationsOption = {
      title: 'Error en la conexión con el server',
      message: error.response.data,
      duration: 1500,
      position: 'bottom-right',
      showClose: false
    }
    Notification.error(notificationsOption)
  }
  return Promise.reject(error)
})

export default apiFetch
