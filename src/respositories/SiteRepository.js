import Client from './Clients/FetchClient';

const baseApi = process.env.VUE_APP_BASEAPI || 'https://tracktik-challenge.staffr.com';

export default {
  getSitesPaginate({
    page = 1, limit = 10, searchWord = null, order = null,
  }) {
    let stringQuery = '';
    if (searchWord) {
      stringQuery += `&title_like=${searchWord}`;
    }

    if (order) {
      stringQuery += `&_sort=title&_order=${order}`;
    }

    return Client(`${baseApi}/sites?_page=${page}&_limit=${limit}${stringQuery}`);
  },
  getSiteById(siteId) {
    return Client(`${baseApi}/sites/${siteId}`);
  },
};
