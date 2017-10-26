import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://nuc.lan:3000',
  crossDomain: true,
  headers: {
    'API_KEY': 'secret key',
    'ANOTHER_HEADER': 'Some header value'
  }
});
