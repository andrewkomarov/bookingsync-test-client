import DS from 'ember-data';

export default DS.Model.extend({
  rental_id: DS.attr(),
  email: DS.attr(),
  start_at: DS.attr(),
  end_at: DS.attr(),
  price: DS.attr(),
  rental: DS.belongsTo('rental')
});
