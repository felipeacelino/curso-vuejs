import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    email: "contato@email.com",
    birthday: "15/12/1993"
  },
  mutations: {
    changeEmail(state) {
      if (state.email === "contato@email.com") {
        state.email = "felipeacelino@hotmail.com";
      } else {
        state.email = "contato@email.com";
      }
    }
  }
});