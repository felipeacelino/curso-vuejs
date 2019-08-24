export default {
  namespaced: true,
  state: {
    endereco: null
  },
  getters: {
    cidadeUf(state) {
      return `${state.endereco.localidade} / ${state.endereco.uf}`;
    },
    cidadeOrUf: (state) => (option) => option === "uf" ? state.endereco.uf : state.endereco.localidade
  },
  mutations: {
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
}