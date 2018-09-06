import axios from 'axios'
import { api } from '../../config'

export const http = axios.create({
  baseURL: api.url
})

export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$http', {
    get () {
      return http
    }
  })
}
