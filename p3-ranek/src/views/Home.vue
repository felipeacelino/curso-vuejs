<template>
  <section>
    <h1>👍 Compre ou Venda 👎</h1>
    <ProdutosBuscar />
    <ProdutosLista />
  </section>
</template>

<script>
import ProdutosBuscar from "@/components/ProdutosBuscar.vue";
import ProdutosLista from "@/components/ProdutosLista.vue";

export default {
  name: "home",
  components: {
    ProdutosBuscar,
    ProdutosLista
  }
};
</script>

<style scoped>
h1 {
  margin-top: 40px;
  font-size: 2rem;
  color: #87f;
  text-align: center;
}
</style>
