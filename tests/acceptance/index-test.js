import { test } from 'qunit';
import moduleForAcceptance from 'bookingsync-test-client/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | index');

test('It should print the main page with Make Reservation button available', function(assert) {
  visit('/');

  andThen(function() {
    assert.ok(find(testSelector('make-reservation-link')).length, 'Make Reservation button is available');
  });
});
