import Vue from 'vue';
import Vuex from 'vuex';
import address from './store/address.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    address
  },
  state: {
    aulasCompletas: []
  },
  mutations: {
    COMPLETAR_AULA(state, payload) {
      if (state.aulasCompletas.indexOf(payload) === -1) state.aulasCompletas.push(payload);
    }
  }
});