export default {
  name: "PrevisaoTempo",
  data() {
    return {
      previsao: {
        min: 0,
        max: 0
      }
    }
  },
  template: `<div>
    <p>Previsão do tempo <b>São Paulo</b></p>
    <p>Min: <b>{{previsao.min | formatTemp}}</b> - Max: <b>{{previsao.max | formatTemp}}</b></p>
  </div>`,
  filters: {
    formatTemp(temp) {
      return `${temp.toFixed(0)}C`;
    }
  },
  methods: {
    getPrevisao() {
      /* fetch("https://www.metaweather.com/api/location/455827/")
        .then(resp => resp.json())
        .then(json => {
          this.previsao.min = json.consolidated_weather[0].min_temp;
          this.previsao.max = json.consolidated_weather[0].max_temp;
        }); */
      this.previsao.min = 15;
      this.previsao.max = 30;
    }
  },
  created() {
    this.getPrevisao();
  }
}

