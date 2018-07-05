// Base Javascript file for app.
var app = angular.module('firstNgApp', []);

app.controller('mainCtrl', function() {
  this.world = 'hello';
  this.inputtext = 'some text to start...';
});
