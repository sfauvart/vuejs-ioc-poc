import { todos, posts, comments } from './mock';

/**
 * @param {Object} config
 * @param {String} config.baseURL
 *
 * @return {Object}
 */
export default function({ axios, baseURL }) {
  return {
    ...todos(),
    ...posts(),
    ...comments(),
  };
}
