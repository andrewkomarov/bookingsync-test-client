import { test } from 'qunit';
import moduleForAcceptance from 'bookingsync-test-client/tests/helpers/module-for-acceptance';
import page from 'bookingsync-test-client/tests/pages/add-rental';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | add rental');

test('It should succeffully create a new rental', function(assert) {

  page.visit();
  andThen(function() {
    assert.notOk(find(testSelector('list-rentals')).length, 'Rentals list should not be empty')
  });

  const name = 'Generated from Acceptance Test Suit';
  const dailyRate = 150;

  page
    .rentalName(name)
    .dailyRate(dailyRate)
    .saveRental()

  // Should redirect to the main page once Rental is added
  andThen(function() {
    assert.ok(find(testSelector('make-reservation-link')).length, 'Make Reservation button is available');
  });  

});

test('It shouldn\'t create a new rental if Rental Name is incorrect', function(assert) {

  page.visit();

  // Rental Name shouldn't contain number (just as failing example)
  const name = 9999;
  const dailyRate = 150;

  page
    .rentalName(name)
    .dailyRate(dailyRate)
    .saveRental()

  // Should redirect to the main page once Rental is added
  andThen(function() {
    assert.notOk(find(testSelector('make-reservation-link')).length, 'Make Reservation button is available');
  });

});
