/**
 * Created by liweihong on 2018/1/16.
 */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const state = {
  count: 3
}
const mutations = {
  add(state, n){
    state.count += n;
  },
  reduce(state){
    state.count--;
  }
}
const getters = {
  // count: function (state) {
  //   return state.count += 10
  // }
}
const actions = {
  addAction(context){
    context.commit('add', 100);
    setTimeout(()=>{context.commit('reduce')},3000)
    console.log('我比reduce先执行了')
  },
  reduceAction({commit}){
    commit('reduce',10)
  }
}

const moduleA = {
  state,
  mutations,
  getters,
  actions
}
export default new Vuex.Store({
  modules: {a:moduleA}
})
