import Ember from 'ember';
import formValidation from 'ember-form-validation/mixins/form-validation';
 
export default Ember.Component.extend(formValidation, {
  actions: {
    saveRental() {
      this.send('validate_form_action', this);
      if (!this.get('validationErrorExists')) 
        this.sendAction('actionName', this);
    }
  },
  validate: {
    form: {
      name: {
        required: true,
        format: 'words',
        message: 'Name error (letters only)',
        requiredMessage: 'You must enter name'
      },
      daily_rate: {
        required: true,
        format: 'number',
        message: 'Rate error',
        requiredMessage: 'You must enter rate'
      }
    }
  }
});
