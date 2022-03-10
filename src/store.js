import Vue from 'vue'
import Vuex from 'vuex'
import auth from "@/store/auth";
import reg from "@/store/reg";
import order from "@/store/order";
import user from "@/store/user";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    reg,
    order,
    user
  }
})
