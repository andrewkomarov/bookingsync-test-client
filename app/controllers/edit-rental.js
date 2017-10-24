import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveRental(params) {
      var name = params.get('name');
      var daily_rate = params.get('daily_rate');
      var model = this.get('model');
      model.set('name', name);
      model.set('daily_rate', daily_rate);
      model.save()
        .then(this.transitionToRoute('list-rentals'));
    }
   }
});
