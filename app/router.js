import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('add-rental');
  this.route('list-rentals');
  this.route('edit-rental', { path: '/edit-rental/:rental_id' });
  this.route('list-bookings', { path: '/list-bookings/:rental_id' });
});

export default Router;
