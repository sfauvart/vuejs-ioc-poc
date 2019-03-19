<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Todos :data="todos"/>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import container from 'ioc-container'

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
    this.todos = await container.services.myAPI.fetchTodos();
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
