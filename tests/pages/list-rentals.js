import {
  create,
  clickable,
  visitable
} from 'ember-cli-page-object';
import testSelector from 'ember-test-selectors';

export default create({
  visit: visitable('/list-rentals'),
  removeRental: clickable(testSelector('rental-id'))
});
