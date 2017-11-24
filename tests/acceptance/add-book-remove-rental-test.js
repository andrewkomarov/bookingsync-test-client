import { test } from 'qunit';
import moduleForAcceptance from 'bookingsync-test-client/tests/helpers/module-for-acceptance';
import addRentalPage from 'bookingsync-test-client/tests/pages/add-rental';
import bookRentalPage from 'bookingsync-test-client/tests/pages/book-rental';
import listRentalsPage from 'bookingsync-test-client/tests/pages/list-rentals';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | add book remove rental');

test('It should succeffully create a new Rental', function(assert) {

  addRentalPage.visit();
  andThen(function() {
    assert.notOk(find(testSelector('list-rentals')).length, 'Rentals list should not be empty')
  });

  const name = 'Generated from Acceptance Test Suit';
  const dailyRate = 150;

  addRentalPage
    .rentalName(name)
    .dailyRate(dailyRate)
    .saveRental()

  // Should redirect to the main page once Rental is added
  andThen(function() {
    assert.ok(find(testSelector('make-reservation-link')).length, 'Make Reservation button is available');
  });  

});

test('It shouldn\'t create a new rental if Rental Name is incorrect', function(assert) {

  addRentalPage.visit();

  // Rental Name shouldn't contain number (just as failing example)
  const name = 9999;
  const dailyRate = 150;

  addRentalPage
    .rentalName(name)
    .dailyRate(dailyRate)
    .saveRental()

  // Should redirect to the main page once Rental is added
  andThen(function() {
    assert.notOk(find(testSelector('make-reservation-link')).length, 'Make Reservation button is available');
  });

});

test('it should click Book It button and make reservation for the Rental previously created by the automated test', function(assert) {

  const email = 'autouser@host.com';
  const startAt  = '2017-01-01';
  const endAt = '2017-12-31';

  bookRentalPage
    .visit()
    .clickBookIt()
  andThen(function() {
    assert.equal(currentRouteName(), 'book-rental');
    bookRentalPage
      .email(email)
      .startAt(startAt)
      .endAt(endAt)
      .bookRental()
    andThen(function() {
      assert.equal(currentURL(), '/');
    });
  });

});

test('it should remove the Rental previously created by the automated test', function(assert) {

  listRentalsPage
    .visit()
    .removeRental()
  andThen(function() {
    assert.equal(currentRouteName(), 'list-rentals');
  });

});

