import Vue from 'vue';

Vue.filter('addressFormat', (address) => {
  const { street, city } = address;
  return `${street}, ${city}`;
});

Vue.filter('fullName', (contact) => {
  const { firstName, lastName } = contact;
  return `${firstName} ${lastName}`;
});
