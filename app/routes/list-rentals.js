import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 1,
      name: 'Some Villa 1',
      daily_rate: '100'
    }, {
      id: 1,
      name: 'Some Villa 2',
      daily_rate: '150'     
    }];
  }
});
