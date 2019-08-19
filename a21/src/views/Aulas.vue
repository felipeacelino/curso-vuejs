<template>
  <div>
    <h2>Aulas</h2>
    <ul>
      <router-link :to="{ name:'aula', params:{ aula:'aula-1' }}">Aula 1</router-link>
      <router-link :to="{ name:'aula', params:{ aula:'aula-2' }}">Aula 2</router-link>
      <router-link :to="{ name:'aula', params:{ aula:'aula-3' }}">Aula 3</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>