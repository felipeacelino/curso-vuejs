<template>
  <div id="app">
    <h1>{{$store.state.email}}</h1>
    <User />
  </div>
</template>

<script>
import User from "./components/User.vue";

export default {
  name: "app",
  components: {
    User
  }
};
</script>

<style>
</style>
