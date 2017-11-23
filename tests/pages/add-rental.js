import {
  create,
  clickable,
  fillable,
  visitable
} from 'ember-cli-page-object';
import testSelector from 'ember-test-selectors';

export default create({
  visit: visitable('/add-rental'),
  rentalName: fillable(testSelector('name')),
  dailyRate: fillable(testSelector('daily-rate')),
  saveRental: clickable(testSelector('save-rental'))
});
