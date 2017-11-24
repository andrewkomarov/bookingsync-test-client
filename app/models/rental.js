import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr(),
  daily_rate: DS.attr(),
  bookings: DS.hasMany('booking'),

  isTestRental: Ember.computed('name', function() {
    return this.get('name') == "Generated from Acceptance Test Suit";
  })

});
