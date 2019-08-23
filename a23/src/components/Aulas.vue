<template>
  <div>
    <h3>Aulas</h3>
    <ul>
      <li v-for="aula in aulas" :key="aula.nome">
        <p>
          <b>{{aula.nome}}</b>
          - {{aula.duracao}}min
        </p>
        <button
          v-show="aulasCompletas.indexOf(aula) === -1"
          @click="handleClick(aula)"
        >Completar aula</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Aulas",
  data() {
    return {
      aulas: [
        {
          nome: "HTML e CSS",
          duracao: 15
        },
        {
          nome: "JavaScript",
          duracao: 30
        },
        {
          nome: "UX Design",
          duracao: 20
        }
      ]
    };
  },
  computed: {
    ...mapState(["aulasCompletas"])
  },
  methods: {
    ...mapMutations(["COMPLETAR_AULA"]),
    handleClick(aula) {
      //this.$store.commit("completarAula", aula);
      this.COMPLETAR_AULA(aula);
    }
  }
};
</script>

<style>
</style>