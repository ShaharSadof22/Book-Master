import Vue from 'vue'
import Vuex from 'vuex'
import bookModule from '@/store/modules/book.module.js'

Vue.use(Vuex)

export default new Vuex.Store({
  srtict: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    bookModule
  }
})
