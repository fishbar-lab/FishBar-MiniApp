import axios from 'axios'

const baseURL = 'https://cnodejs.org/api/v1'

const request = axios.create({
  baseURL,
  timeout: 5000
})

export default request
