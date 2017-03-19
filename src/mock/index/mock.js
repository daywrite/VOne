import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {Thingses} from '../data/Things'

export default {
  bootstrap() {
    let mock = new MockAdapter(axios, {delayResponse: 3000})
    // mock.onGet('/thing/list').reply(200, {things: _thingses})
    mock.onGet('/thing/list').reply(config => {
      let _thingses = Thingses
      let {page, limit, name, count} = config.params
      let data = []
      if(name && name.length!==0)
      {
        _thingses = _thingses.filter((value,index,arr)=> value.name.includes(name))
      }
      if(count && count!==0)
      {
        _thingses = _thingses.filter((value,index,arr)=> value.count > count)
      }
      data = _thingses.filter((u,index)=> index < limit * page && index >= limit * (page-1))
      let total = _thingses.length
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
