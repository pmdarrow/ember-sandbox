import Ember from 'ember';

export default Ember.TextField.extend({
  _datePicker: null,

  setupDatePicker: function() {
    var datePicker = this.$().kendoDatePicker();
    this.set('_datePicker', datePicker.data('kendoDatePicker'));
  }.on('didInsertElement'),

  destroyDatePicker: function() {
    var datePicker = this.get('_datePicker');
    if (datePicker) {
      datePicker.destroy();
    }
    this.set('_datePicker', null);
  }.on('willDestroyElement'),

  openDatePicker: function() {
    this.get('_datePicker').open();
  }.on('focusIn')
});
