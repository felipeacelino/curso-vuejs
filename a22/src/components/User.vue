<template>
  <div>
    <ul>
      <li>User: {{fullName}}</li>
      <li>Email: {{email}}</li>
      <li>Birthday: {{birthday}}</li>
    </ul>
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
  }
};
</script>

<style>
</style>