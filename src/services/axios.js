import Vue from 'vue'
import Axios from 'axios'

var axios = Axios.create({
  baseURL: "http://localhost:3001",
  timeout: 20000
})

var api = {
  getHosList() {
    return axios.get('/hospital')
  },

  getHosById(id) {
    return axios.get('/hospital/' + id)
  },

  updateHos(id, latitude, longitude, name, address, open_time, close_time, phone, scale, spectialist) {
    return axios.put('/hospital/update', {
      'id': id,
      'latitude': latitude,
      'longitude': longitude,
      'name': name,
      'address': address,
      'open_time': open_time,
      'close_time': close_time,
      'phone': phone,
      'scale': scale,
      'spectialist': spectialist
    })
  },

  delHos(id) {
    return axios.put('/hospitals/disable', {
      'id': id
    })
  }
}

Vue.use({
  install(Vue, options) {
    Vue.prototype['$api'] = api
  }
})

export default api