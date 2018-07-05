// Base Javascript file for app.
var app = angular.module('firstNgApp', []);

app.controller('mainCtrl', function() {
  // Part 2.
  this.world = 'hello';
  this.inputtext = 'some text to start...';

  // Part 3.
  this.fruits = ['apples', 'oranges','bananas'];

  this.alertMe = function() {
    alert('something');
  }
});
