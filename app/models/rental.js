import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  daily_rate: DS.attr(),
});
