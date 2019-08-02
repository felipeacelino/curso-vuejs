export default {
  name: "CotacaoDolar",
  data() {
    return {
      cotacao: 0
    }
  },
  template: `<p>Cotação do Dólar: <b>{{cotacao | formataMoeda}}</b></p>`,
  filters: {
    formataMoeda(valor) {
      return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }
  },
  methods: {
    getCotacao() {
      fetch("https://api.exchangeratesapi.io/latest?base=USD")
        .then(resp => resp.json())
        .then(json => this.cotacao = json.rates.BRL);
    }
  },
  created() {
    this.getCotacao();
  }
}