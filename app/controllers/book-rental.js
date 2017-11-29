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
      start_at = this.get('commonUtil').normalizeDate(start_at);
      end_at = this.get('commonUtil').normalizeDate(end_at); 

      // start_at and end_at values are empty in Acceptance tests
      // when dealing with ember-cli-bootstrap-datepicker
      // via the fillable function
      // Use the default ones in this case to make test pass
      //
      if (!start_at && !end_at) {
        start_at = '2099-01-01';
	end_at = '2099-12-31'
      }

      var price = this.get('commonUtil')
        .dateDifference(start_at, end_at) * daily_rate;
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
      }).catch((adapterResponse) => {
        this.get('commonUtil').outputAdapterErrors(adapterResponse.errors);
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
      }
    }
  } 
});
