import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveRental() {
      this.sendAction('actionName', this);
    }
  }
});
