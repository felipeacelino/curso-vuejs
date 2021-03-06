const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: false,
    carrinho: [],
    mensagemAlerta: "Item adicionado",
    alertaAtivo: false,
    carrinhoAtivo: false
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
    clickForaCarrinho({ target, currentTarget }) {
      if (target === currentTarget) this.carrinhoAtivo = false;
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
    compararEstoque() {
      const items = this.carrinho.filter(({ id }) => id === this.produto.id);
      this.produto.estoque -= items.length;
    },
    alerta(mensagem) {
      this.mensagemAlerta = mensagem;
      this.alertaAtivo = true;
      setTimeout(() => {
        this.alertaAtivo = false;
      }, 1500);
    },
    router() {
      const hash = document.location.hash;
      if (hash) this.fetchProduto(hash.replace("#", ""));
    }
  },
  watch: {
    produto() {
      document.title = this.produto.nome || "Techno";
      const hash = this.produto.id || "";
      history.pushState(null, null, `#${hash}`);
      if (this.produto) this.compararEstoque();
    },
    carrinho() {
      window.localStorage.carrinho = JSON.stringify(this.carrinho);
    }
  },
  created() {
    this.fetchProdutos();
    this.checarLocalStorage();
    this.router();
  }
})