import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('save-rental', 'Integration | Component | save rental', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{save-rental}}`);
  assert.equal(this.$().text().trim(), 'Submit');
  
/*
  this.set('saveRental', (value) => {
    alert(1);
  });

  this.render(hbs`
    {{#save-rental actionName=(action saveRental on=submit) }}
    {{/save-rental}}
  `);
  this.$('button').click();
*/

});
