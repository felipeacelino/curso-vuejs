<template>
  <div>
    <ul>
      <li>User: {{fullName}}</li>
      <li>Email: {{email}}</li>
      <li>Birthday: {{birthday}}</li>
    </ul>
    <button @click="handleClick">Alterar e-mail</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "User",
  data() {
    return {
      name: "Felipe",
      lastName: "Acelino"
    };
  },
  computed: {
    ...mapState(["email", "birthday"]),
    fullName() {
      return `${this.name} ${this.lastName}`;
    }
  },
  methods: {
    handleClick() {
      this.$store.commit("changeEmail");
    }
  }
};
</script>

<style>
</style>