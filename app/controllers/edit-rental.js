import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveRental(params) {
      var name = params.get('name');
      var daily_rate = params.get('daily_rate');
      var model = this.get('model');
      model.set('name', name);
      model.set('daily_rate', daily_rate);
      model.save().then((rental) => {
        this.transitionToRoute('list-rentals');
      }).catch((adapterError) => {
        alert(adapterError);
      });
    }
   }
});
