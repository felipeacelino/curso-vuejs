const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: false,
    carrinho: []
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }
  },
  computed: {
    carrinhoTotal() {
      return this.carrinho.reduce((acc, cur) => acc + cur.preco, 0);
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
    },
    abrirModal(id) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      this.fetchProduto(id);
    },
    fecharModal({ target, currentTarget }) {
      if (target === currentTarget) this.produto = false;
    },
    adicionarItem() {
      this.produto.estoque--;
      const { id, nome, preco } = this.produto;
      this.carrinho.push({ id, nome, preco });
    },
    removerItem(id) {
      this.carrinho.splice(id, 1);
    }
  },
  created() {
    this.fetchProdutos();
  }
})