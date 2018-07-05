// Base Javascript file for app.
var app = angular.module('firstNgApp', []);

app.controller('mainCtrl', function() {
  // Part 2. Two-way Data Binding & Controllers.
  this.world = 'hello';
  this.inputtext = 'some text to start...';

  // Part 3. Directives.
  this.fruits = ['apples', 'oranges','bananas'];

  this.alertMe = function() {
    alert('something');
  }

  // Part 4. Filters.
  this.cars = ['oldmosbile', 'hyundai', 'kia', 'ford', 'honda', 'kawasaki'];
});

app.filter('makePlural', function() {
  return function(input) {
    return input + 's';
  }
});
