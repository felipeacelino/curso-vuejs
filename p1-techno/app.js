const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: false,
    carrinho: [],
    mensagemAlerta: "Item adicionado",
    alertaAtivo: false
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
      this.alerta(`${nome} adicionado ao carrinho.`);
    },
    removerItem(id) {
      this.carrinho.splice(id, 1);
      this.alerta("Item removido do carrinho.");
    },
    checarLocalStorage() {
      if (window.localStorage.carrinho) this.carrinho = JSON.parse(window.localStorage.carrinho);
    },
    alerta(mensagem) {
      this.mensagemAlerta = mensagem;
      this.alertaAtivo = true;
      setTimeout(() => {
        this.alertaAtivo = false;
      }, 1500);
    }
  },
  watch: {
    carrinho() {
      window.localStorage.carrinho = JSON.stringify(this.carrinho);
    }
  },
  created() {
    this.fetchProdutos();
    this.checarLocalStorage();
  }
})