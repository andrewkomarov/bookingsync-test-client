import Ember from 'ember';
import CommonUtil from '../utils/common';

export default Ember.Controller.extend({
  init() {
    if (!this.get('commonUtil')) {
      this.set('commonUtil', CommonUtil.create());
    }
  },
  actions: {
    bookRental(params) {
      var rental_id = params.get('id');
      var daily_rate = this.get('model').get('daily_rate');
      var email = this.get('email');
      var start_at = this.get('start_at');
      var end_at = this.get('end_at');
      var price = this.get('commonUtil')
        .dateDifference(this.get('start_at'), this.get('end_at')) * daily_rate;
      //console.log(price);
      var booking = this.get('store').createRecord('booking', {
        rental_id: rental_id,
        email: email,
        start_at: start_at,
        end_at: end_at,
        price: price
      });
     booking.save()
       .then(this.transitionToRoute('index'));
    },
    updatePrice() {
      var daily_rate = this.get('model').get('daily_rate');
      var price = this.get('commonUtil')
        .dateDifference(this.get('start_at'), this.get('end_at')) * daily_rate;
      if (this.get('end_at')) Ember.$('#price').text("Price: $"+price);
    }
  }
});
