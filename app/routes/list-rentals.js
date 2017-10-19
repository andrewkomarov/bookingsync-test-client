import Ember from 'ember';

export default Ember.Route.extend({
  model() {

  //alert(this.get('store').findAll('rental'));

  return this.get('store').findAll('rental');
  /*
    return [{
      id: 1,
      name: 'Some Villa 1',
      daily_rate: '100'
    }, {
      id: 1,
      name: 'Some Villa 2',
      daily_rate: '150'     
    }];
  */
  }
 
});
