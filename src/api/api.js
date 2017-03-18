import axios from 'axios'
let base = ''
export const getThingList = params => {
  return axios.get(`${base}/thing/list`)
}
