<template>
  <div>
    <h1>Curso {{curso}}</h1>
    <Descricao />
    <Aulas />
  </div>
</template>

<script>
import Descricao from "./Descricao.vue";
import Aulas from "./Aulas.vue";

export default {
  name: "Curso",
  props: ["curso"],
  components: {
    Descricao,
    Aulas
  }
};
</script>

<style>
</style>