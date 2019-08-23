<template>
  <div>
    <h1>Aluno</h1>
    <div v-if="aulasCompletas.length > 0">
      <h2>Aulas completas</h2>
      <ul>
        <li v-for="aula in aulasCompletas" :key="aula.nome">
          <b>{{aula.nome}}</b>
          - {{aula.duracao}}min
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Aluno",
  computed: {
    ...mapState(["aulasCompletas"])
  }
};
</script>

<style>
</style>