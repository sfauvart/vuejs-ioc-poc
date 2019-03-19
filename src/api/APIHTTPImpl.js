import { todos, posts, comments } from './http';

/**
 * @param {Object} config
 * @param {String} config.baseURL
 *
 * @return {Object}
 */
export default function({ axios, baseURL }) {
  return {
    ...todos(axios, baseURL),
    ...posts(axios, baseURL),
    ...comments(axios, baseURL),
  };
}
