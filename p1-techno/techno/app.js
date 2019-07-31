const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: {}
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }
  },
  methods: {
    fetchProdutos() {
      fetch("api/produtos.json")
        .then(resp => resp.json())
        .then(json => this.produtos = json);
    },
    fetchProduto(id) {
      fetch(`api/produtos/${id}/dados.json`)
        .then(resp => resp.json())
        .then(json => this.produto = json);
    }
  },
  created() {
    this.fetchProdutos();
  }
})