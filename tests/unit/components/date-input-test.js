import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('date-input', 'DateInputComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

test('it opens the date picker when focused', function() {
  expect(2);

  this.append();

  equal($('.k-calendar-container').css('display'), 'none',
    'calendar is hidden by default');

  this.subject().$().focus();

  equal($('.k-calendar-container').css('display'), 'block',
    'calendar is displayed after focus');
});
