export default {
  name: "AcoesEmpresa",
  props: ["dados"],
  template: `
  <ul>
    <li v-for="(valor, chave) in dados"><b>{{chave}}:</b> {{valor}}</li>
  </ul>
  `,
}