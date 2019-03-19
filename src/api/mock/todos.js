import dataTodos from './data/todos_all.json';

export default () => ({
  fetchTodos: () => {
    return dataTodos;
  },

  fetchTodo: (id) => {
    return dataTodos[id];
  }
});
