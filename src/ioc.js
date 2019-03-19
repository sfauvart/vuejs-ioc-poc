import axios from 'axios';
import apiImpl from 'api-impl';

export default {
  properties: {
    // TODO: mettre ici les paramètres de l'api par exemple ou autre
    // et qui pourrait être réinjecté dans la partie services en dessous
  },
  services: {
    httpFetch: axios,
    myAPI: apiImpl({
      axios,
      baseURL: process.env.VUE_APP_API_BASE_URL,
    }),
  }
};
