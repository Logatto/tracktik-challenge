import Client from './Clients/FetchClient';

const baseApi = process.env.VUE_APP_BASEAPI;
const limit = 10;

export default {
  getSitesPaginate({ page = 1 }) {
    return Client(`${baseApi}/sites?_page=${page}&_limit=${limit}`);
  },
  getSiteById(siteId) {
    return Client(`${baseApi}/sites/${siteId}`);
  },
};
