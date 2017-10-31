import Ember from 'ember';

export default Ember.Object.extend({
  init() {
  },
  dateDifference(start_at, end_at) {
    var date1 = new Date(start_at);
    var date2 = new Date(end_at);
    var difference = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(difference / (1000 * 3600 * 24));
  }
});
