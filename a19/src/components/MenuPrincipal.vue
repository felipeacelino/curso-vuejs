<template>
  <nav>
    <ul>
      <li>
        <a href="#" @click.prevent="handleClick('SobreEmpresa')">Sobre</a>
      </li>
      <li>
        <a href="#" @click.prevent="handleClick('Servicos')">Serviços</a>
      </li>
      <li>
        <a href="#" @click.prevent="handleClick('Contato')">Contato</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MenuPrincipal",
  methods: {
    handleClick(conteudo) {
      this.$emit("handleConteudo", conteudo);
    }
  }
};
</script>

<style>
nav {
  background-color: #3c4147;
}
nav ul {
  display: flex;
  justify-content: space-around;
}
nav a {
  display: inline-block;
  padding: 10px;
  color: #fff;
  text-decoration: none;
}
nav a:hover {
  color: orange;
}
</style>
