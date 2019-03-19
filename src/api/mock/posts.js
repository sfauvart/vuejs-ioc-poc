import dataPosts from './data/posts_all.json';

export default () => ({
  fetchPosts: () => {
    return dataPosts;
  },

  fetchPost: (id) => {
    return dataPosts[id];
  }
});
