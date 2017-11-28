import Ember from 'ember';

export default Ember.Object.extend({
  init() {
  },
  dateDifference(start_at, end_at) {
    var date1 = new Date(start_at);
    var date2 = new Date(end_at);
    var difference = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(difference / (1000 * 3600 * 24));
  },
  normalizeDate(date) {
    //
    // ECMAScript 5 interprets ISO 8601 string without time zone as UTC
    // therefore we just split it up and use it as parameters
    // Datepicker issue is described here: https://github.com/soulim/ember-cli-bootstrap-datepicker/issues/42
    //
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()+1, 0, 0, 0);
  },
  outputAdapterErrors(errors) {
    //
    // The simplest way to output API adapter errors
    //
    Ember.$.each(errors, function(index, value) {
      alert (value['title']);
    });
  }
});
