import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('rental');
  },
  actions: {
    error(reason) {
      alert(reason); // fail
      this.transitionTo('index');
    }
  }
});
