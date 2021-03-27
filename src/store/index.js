import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    showNum: state => {
      return `当前数值【${state.count}】`
    }
  },
  mutations: {
    add(state) {
      state.count++
    },
    // mutations携带参数
    addN(state, number) {
      state.count += number
    },
    reduce(state) {
      state.count--
    },
    reduceN(state, number) {
      state.count -= number
    }
  },
  //   actions中执行异步操作，但是不能直接修改state中的数据，需要通过mutations间接修改
  actions: {
    addAsync(context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    },
    addNAsync(context, number) {
      setTimeout(() => {
        context.commit('addN', number)
      }, 1000)
    },
    reduceAsync(context) {
      setTimeout(() => {
        context.commit('reduce')
      }, 1000)
    },
    reduceNAsync(context, number) {
      setTimeout(() => {
        context.commit('reduceN', number)
      }, 1000)
    }
  },
  modules: {}
})
