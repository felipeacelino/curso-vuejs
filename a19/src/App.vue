<template>
  <div id="app">
    <MenuPrincipal @handleConteudo="alteraConteudo" />
    <div class="content">
      <keep-alive>
        <component :is="componenteAtivo"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import MenuPrincipal from "./components/MenuPrincipal.vue";
import SobreEmpresa from "./components/SobreEmpresa.vue";
import Servicos from "./components/Servicos.vue";
import Contato from "./components/Contato.vue";

export default {
  name: "app",
  components: {
    MenuPrincipal,
    SobreEmpresa,
    Servicos,
    Contato
  },
  data() {
    return {
      componenteAtivo: "SobreEmpresa"
    };
  },
  methods: {
    alteraConteudo(conteudo) {
      this.componenteAtivo = conteudo;
    }
  }
};
</script>

<style>
body,
ul,
li {
  padding: 0;
  margin: 0;
}
body {
  font-family: sans-serif;
}
h1 {
  margin: 0;
  margin-bottom: 20px;
  font-size: 20px;
  text-align: center;
}
h2 {
  margin: 0;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 300;
  text-align: justify;
}
ul {
  list-style: none;
}
.content {
  margin: 20px 100px;
  padding: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
