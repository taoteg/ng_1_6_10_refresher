// Base Javascript file for app.
var app = angular.module('firstNgApp', []);

app.controller('mainCtrl', function($http) {
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

  // Part 5: $http Service.
  this.animals = ['cat', 'dog', 'rabbit', 'bird', 'horse', 'snake'];
  var targetUrl = 'https://jsonplaceholder.typicode.com/posts';
  var vm = this;
  $http.get(targetUrl).then(function(response) {
    // console.log(response);
    vm.posts = response.data;
  });
});

app.filter('makePlural', function() {
  return function(input) {
    return input + 's';
  }
});
