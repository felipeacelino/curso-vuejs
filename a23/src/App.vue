<template>
  <div id="app">
    <Aluno />
    <Curso />
    <hr />Digite um CEP:
    <input type="text" v-model="cep" />
    <button @click="handleClick">Buscar Endereço</button>
    <p>{{$store.state.endereco}}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Aluno from "./components/Aluno.vue";
import Curso from "./components/Curso.vue";

export default {
  name: "app",
  components: {
    Aluno,
    Curso
  },
  data() {
    return {
      cep: null
    };
  },
  methods: {
    ...mapActions(["obterCep"]),
    handleClick() {
      this.obterCep(this.cep);
      //this.$store.dispatch("obterCep", this.cep);
    }
  }
};
</script>

<style>
</style>
