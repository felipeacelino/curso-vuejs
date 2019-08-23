import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    aulasCompletas: []
  },
  mutations: {
    COMPLETAR_AULA(state, payload) {
      if (state.aulasCompletas.indexOf(payload) === -1) state.aulasCompletas.push(payload);
    }
  }
});