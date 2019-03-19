import dataComments from './data/comments_all.json';

export default () => ({
  fetchComments: () => {
    return dataComments;
  },

  fetchComment: (id) => {
    return dataComments[id];
  }
});
