import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  /*
  this.get('store').findRecord('rental', params.rental_id).then(function(rental) {
    rental.get('bookings').then(function(bookings) {
      console.log( bookings );
    });
  });
  */
    return this.get('store').findRecord('rental', params.rental_id);
  }
});
