import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    aulasCompletas: [],
    endereco: null
  },
  getters: {
    cidadeUf(state) {
      return `${state.endereco.localidade} / ${state.endereco.uf}`;
    },
    cidadeOrUf: (state) => (option) => option === "uf" ? state.endereco.uf : state.endereco.localidade
  },
  mutations: {
    COMPLETAR_AULA(state, payload) {
      if (state.aulasCompletas.indexOf(payload) === -1) state.aulasCompletas.push(payload);
    },
    ALTERAR_ENDERECO(state, payload) {
      state.endereco = payload;
    }
  },
  actions: {
    obterCep(context, payload) {
      fetch(`https://viacep.com.br/ws/${payload}/json/`)
        .then(resp => resp.json())
        .then(json => {
          context.commit("ALTERAR_ENDERECO", json);
        });
    }
  }
});