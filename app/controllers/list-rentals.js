import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeRental(params) {
      var rental_id = params.get('id');
      this.get('store').findRecord('rental', rental_id, { backgroundReload: false }).then(function(rental) {
        rental.deleteRecord();
        //rental.get('isDeleted') ; // => true
        rental.save().then(() => {
        }).catch((adapterError) => {
          alert(adapterError);
        });
      });
    }
  }
});
