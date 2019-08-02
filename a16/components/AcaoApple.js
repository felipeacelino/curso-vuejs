import CotacaoDolar from "./CotacaoDolar.js";

export default {
  name: "AcaoApple",
  data() {
    return {
      token: "pk_d210e5636a344c0ca646d5b6f9ab9631",
      marketCap: 0
    }
  },
  template: `<div>
    <p>Valor de Mercado da <b>Apple</b></p>
    <p><b>{{marketCap | formataMoeda}}</b></p>
    <cotacao-dolar></cotacao-dolar>
  </div>`,
  components: {
    CotacaoDolar
  },
  filters: {
    formataMoeda(valor) {
      return valor.toLocaleString("en-US", { style: "currency", currency: "USD" });
    }
  },
  methods: {
    getAcaoApple() {
      fetch("https://cloud.iexapis.com/stable/stock/aapl/quote?token=" + this.token)
        .then(resp => resp.json())
        .then(json => this.marketCap = json.marketCap);
    }
  },
  created() {
    this.getAcaoApple();
  }
}