import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    bookRental(params) {
      var rental_id = params.get('id');
    }
  }
});
