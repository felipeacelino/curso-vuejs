<template>
  <form action="#">
    <h1>Contato</h1>
    <Campo name="nome" label="Nome" id="nome" placeholder="Digite seu nome" :required="true" />
    <Campo
      type="email"
      name="email"
      label="E-mail"
      id="email"
      placeholder="Digite seu e-mail"
      :required="true"
    />
    <Campo
      type="tel"
      name="telefone"
      label="Telefone"
      id="telefone"
      placeholder="Digite seu telefone"
      :required="true"
    />
    <button type="submit" class="btn">Enviar</button>
  </form>
</template>

<script>
import Campo from "./Campo.vue";

export default {
  name: "Contato",
  components: {
    Campo
  }
};
</script>

<style>
.btn {
  padding: 10px 20px;
  border: none;
  background: orange;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
</style>