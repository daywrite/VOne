import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {Thingses} from '../data/Things'
let _thingses = Thingses
export default {
  bootstrap() {
    let mock = new MockAdapter(axios, {delayResponse: 3000})
    mock.onGet('/thing/list').reply(200, {things: _thingses})
  }
}
