import SiteRepository from './SiteRepository';

const respositories = {
  site: SiteRepository,
};

export default {
  get: (name) => respositories[name],
};
