import Ember from 'ember';
import CommonUtil from '../utils/common';
import formValidation from 'ember-form-validation/mixins/form-validation';

export default Ember.Controller.extend(formValidation, {
  init() {
    if (!this.get('commonUtil')) {
      this.set('commonUtil', CommonUtil.create());
    }
  },
  actions: {
    bookRental(params) {
      this.send('validate_form_action', this);
      if (this.get('validationErrorExists')) return false;
      // validation passed: 
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
      booking.save().then(() => {
        this.transitionToRoute('index');
      }).catch((adapterError) => {
        alert(adapterError);
      });
    },
    updatePrice() {
      var daily_rate = this.get('model').get('daily_rate');
      var price = this.get('commonUtil')
        .dateDifference(this.get('start_at'), this.get('end_at')) * daily_rate;
      if (this.get('end_at')) Ember.$('#price').text("Price: $"+price);
    }
  },
  validate: {
    form: {
      email: {
        required: true,
        format: 'email',
        message: 'E-mail error',
        requiredMessage: 'You must enter correct e-mail'
      },
      start_at: {
        required: true,
        customFormat: /.*/,
        customFormatMessage: 'Start date error',
        requiredMessage: 'You must enter correct date'
      },
      end_at: {
        required: true,
        customFormat: /.*/,
        customFormatMessage: 'End date error',
        requiredMessage: 'You must enter correct date'
      }
    }
  } 
});
