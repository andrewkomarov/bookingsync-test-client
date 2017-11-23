import {
  create,
  clickable,
  fillable,
  visitable
} from 'ember-cli-page-object';
import testSelector from 'ember-test-selectors'; 

// clickBookIt - click Book It button on the first Rental in the list
export default create({
  visit: visitable('/available-rentals'),
  clickBookIt: clickable( testSelector('rental-id')),
  email: fillable(testSelector('email')),
  startAt: fillable(testSelector('start-at')),
  endAt: fillable(testSelector('end-at')),
  bookRental: clickable(testSelector('book-rental'))
});
