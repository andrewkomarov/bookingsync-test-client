import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveRental(params) {
      var name = params.get('name');
      var daily_rate = params.get('daily_rate');
      var rental = this.get('store').createRecord('rental', {
        name: name,
        daily_rate: daily_rate
      });
     // Stumbled upon an interesting glitch when trying to do
     // this.transitionToRoute('list-rentals')
     // Check this out for more details: https://github.com/emberjs/data/issues/4421
     // We go to the different route insted (main page in this case)
     rental.save().then(this.transitionToRoute(''));
    }
  }
});
