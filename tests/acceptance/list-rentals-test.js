import { test } from 'qunit';
import moduleForAcceptance from 'bookingsync-test-client/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | list rentals');

test('It should print the list of available rentals', function(assert) {
  visit('/list-rentals');
  andThen(function() {
    assert.ok(find(testSelector('list-rentals')).length, 'Rentals list should not be empty');
  });
});
