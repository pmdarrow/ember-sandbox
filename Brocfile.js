/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('vendor/kendo-ui/js/kendo.core.min.js');
app.import('vendor/kendo-ui/js/kendo.calendar.min.js');
app.import('vendor/kendo-ui/js/kendo.popup.min.js');
app.import('vendor/kendo-ui/js/kendo.datepicker.min.js');

app.import('vendor/kendo-ui/styles/kendo.common.min.css');
app.import('vendor/kendo-ui/styles/kendo.default.min.css');

var kendoSprites = pickFiles('vendor/kendo-ui/styles/Default', {
   srcDir: '/',
   files: ['*'],
   destDir: '/assets/Default'
});

module.exports = app.toTree(kendoSprites);
