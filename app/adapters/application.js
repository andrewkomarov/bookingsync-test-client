import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://komarov.kiev.ua:3000',
  crossDomain: true,
  headers: {
    'API_TOKEN': '3eb6db5a9026c547c72708438d496d942e976b252138db7e4e0ee5edd7539457d3ed0fa02ee5e7179420ce5290462018591adaf5f42adcf855da04877827def2',
    'ANOTHER_HEADER': 'Some header value'
  }
});
