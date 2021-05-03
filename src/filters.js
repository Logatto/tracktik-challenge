import Vue from 'vue';

Vue.filter('addressFormat', (address) => {
  if (address) {
    const { street, city } = address;
    return `${street}, ${city}`;
  }
  return '';
});

Vue.filter('fullName', (contact) => {
  if (contact) {
    const { firstName, lastName } = contact;
    return `${firstName} ${lastName}`;
  }
  return '';
});
