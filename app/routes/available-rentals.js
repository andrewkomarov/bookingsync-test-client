import Ember from 'ember';

export default Ember.Route.extend({
  // Here we use different data fetching method with the purpose
  // to be able to distinguih general Rental List and Rentals List 
  // available for making reservations 
  model() {
    return this.get('store').findAll('rental');
  }
});
