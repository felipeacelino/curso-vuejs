<template>
  <ul v-if="paginasTotal > 1">
    <li v-if="paginaAtual > 1">
      <router-link :to="{query: query(1)}">&laquo; Primeira</router-link>
    </li>
    <li v-if="paginaAtual > 1">
      <router-link :to="{query: query(paginaAtual - 1)}">&lsaquo; Anterior</router-link>
    </li>
    <li v-for="pagina in paginas" :key="pagina">
      <router-link :to="{query: query(pagina)}">{{pagina}}</router-link>
    </li>
    <li v-if="paginaAtual < paginasTotal">
      <router-link :to="{query: query(paginaAtual + 1)}">Próxima &rsaquo;</router-link>
    </li>
    <li v-if="paginaAtual < paginasTotal">
      <router-link :to="{query: query(paginasTotal)}">Última &raquo;</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProdutosPaginar",
  props: {
    produtosPorPagina: {
      type: Number,
      default: 1
    },
    produtosTotal: {
      type: Number,
      default: 1
    }
  },
  computed: {
    paginas() {
      const current = this.paginaAtual;
      const range = 9;
      const offset = Math.ceil(range / 2);
      const total = this.paginasTotal;
      const pagesArray = [];
      for (let i = 1; i <= total; i++) {
        pagesArray.push(i);
      }
      pagesArray.splice(0, current - offset);
      pagesArray.splice(range, total);
      return pagesArray;
    },
    paginasTotal() {
      const total = this.produtosTotal / this.produtosPorPagina;
      return total !== Infinity ? Math.ceil(total) : 0;
    },
    paginaAtual() {
      return this.$route.query._page ? Number(this.$route.query._page) : 1;
    }
  },
  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina
      };
    }
  }
};
</script>

<style scoped>
ul {
  grid-column: 1 / -1;
  text-align: center;
}

li {
  display: inline-block;
}

li a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
  transition: all 0.2s;
}
li a:hover {
  background: rgba(0, 0, 0, 0.1);
}
li a.router-link-exact-active {
  background: #87f;
  color: #fff;
}
</style>