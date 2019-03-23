<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Todos :data="todos"/>
  </div>
</template>

<script>
import Todos from '@app/components/Todos.vue'
import { getServices } from '@app/ioc'

export default {
  name: 'app',
  components: {
    Todos
  },
  data() {
    return {
      todos: [],
    };
  },
  async created() {
    let api = await getServices('myAPI');
    this.todos = await api.fetchTodos();
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
