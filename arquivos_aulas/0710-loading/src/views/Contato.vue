<template>
  <div>
    <div v-if="loading">
      <PageLoading/>
    </div>
    <div v-if="api">
      <h1>Contato</h1>
      <p>{{api}}</p>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "contato",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  }
};
</script>
