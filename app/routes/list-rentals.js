import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    
    return this.get('store').findAll('rental');
/*
  var that = this;
  return new Ember.RSVP.Promise(function(resolve) {
    that.store.findAll('rental').then(function(rentals) {
      resolve(rentals.filterBy('isNew', false));
    });
  });
*/

  }
});
