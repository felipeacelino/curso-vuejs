<template>
  <div id="app">
    <Aluno />
    <Curso />
    <hr />Digite um CEP:
    <input type="text" v-model="cep" />
    <button @click="handleClick">Buscar Endereço</button>
    <p>{{$store.state.address.endereco}}</p>
    <div v-if="$store.state.address.endereco">
      <p>
        <b>Cidade:</b>
        {{$store.getters["address/cidadeUf"]}}
      </p>
      <p>
        <b>Cidade ou Estado:</b>
        {{$store.getters["address/cidadeOrUf"]("uf")}}
      </p>
    </div>
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
      //this.obterCep(this.cep);
      this.$store.dispatch("address/obterCep", this.cep);
    }
  },
  created() {
    console.log(this.$store.getters);
  }
};
</script>

<style>
</style>
