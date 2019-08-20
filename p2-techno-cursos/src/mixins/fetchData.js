export default {
  data() {
    return {
      api: null,
      loading: true
    };
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.api = null;
      fetch(`http://localhost:3000${url}`)
        .then(r => r.json())
        .then(json => {
          setTimeout(() => {
            this.api = json;
            this.loading = false;
          }, 1500);
        });
    }
  }
}