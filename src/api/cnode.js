import request from '../utils/request'

export default {
  listTopic: async () => {
    return request.get('/topics')
  }
}