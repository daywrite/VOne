import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {Thingses} from '../data/Things'
let _thingses = Thingses
export default {
  bootstrap() {
    let mock = new MockAdapter(axios, {delayResponse: 3000})
    // mock.onGet('/thing/list').reply(200, {things: _thingses})
    mock.onGet('/thing/list').reply(config => {
      let {page, limit} = config.params

      let total = _thingses.length
      let data = _thingses.filter((u,index)=> index < limit * page && index >= limit * (page-1))
      return new Promise((resolve, reject)=> {
        setTimeout(()=> {
          resolve([200,{
            total: total,
            thinglist: data
          }])
        })
      },500)
    })
  }
}
