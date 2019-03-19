export default (axios, baseURL) => ({
  fetchComments: () => {
    return axios
      .get(`${baseURL}/comments`)
      .then(response => response.data)
      .catch(error => error);
  },

  fetchComment: (id) => {
    return axios
      .get(`${baseURL}/comments/${id}`)
      .then(response => response.data)
      .catch(error => error);
  }
});
