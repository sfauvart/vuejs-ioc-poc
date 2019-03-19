export default (axios, baseURL) => ({
  fetchPosts: () => {
    return axios
      .get(`${baseURL}/posts`)
      .then(response => response.data)
      .catch(error => error);
  },

  fetchPost: (id) => {
    return axios
      .get(`${baseURL}/posts/${id}`)
      .then(response => response.data)
      .catch(error => error);
  }
});
