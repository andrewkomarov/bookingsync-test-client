import { test } from 'qunit';
import moduleForAcceptance from 'bookingsync-test-client/tests/helpers/module-for-acceptance';
import page from 'bookingsync-test-client/tests/pages/book-rental';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | book rental');

test('it should click Book It button and make reservation from the first available Rental in the list', function(assert) {

  const email = 'autouser@host.com';
  const startAt  = '2017-01-01';
  const endAt = '2017-12-31';

  page
    .visit()
    .clickBookIt()
  andThen(function() {
    assert.equal(currentRouteName(), 'book-rental');
    page
      .email(email)
      .startAt(startAt)
      .endAt(endAt)
      .bookRental()
    andThen(function() {
      assert.equal(currentURL(), '/');
    });
  });

});
