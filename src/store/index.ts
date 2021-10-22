import Vue from 'vue'
import Vuex from 'vuex'
import vuexStore from 'vuex-persistedstate'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {},
    plugins: [vuexStore({ key: 'omc' })]
})
