import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* 初始化变量 */
const state = {
  /* 基础数据列表 */
  thinglist: []
}

/* 动作 */
const mutations = {
  GETTHINGLIST(state, amount){
    state.thinglist = amount
  }
}

/* 爆露 */
export default new Vuex.Store({
  state,
  mutations
})
