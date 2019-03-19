export default (axios, baseURL) => ({
  fetchTodos: () => {
    return axios
      .get(`${baseURL}/todos`)
      .then(response => response.data)
      .catch(error => error);
  },

  fetchTodo: (id) => {
    return axios
      .get(`${baseURL}/todos/${id}`)
      .then(response => response.data)
      .catch(error => error);
  }
});
