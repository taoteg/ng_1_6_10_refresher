// Base Javascript file for app.

// Define App.
var app = angular.module('firstNgApp', ['ui.router']);

// Configure App.
app.config(function( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../home.html'
    })
    .state('posts', {
      url: '/posts',
      templateUrl: '<posts-list></posts-list>'
    });
});

// Define Main App Controller.
app.controller('mainCtrl', function( $http ) {

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
  // declaring vm as `this` is required to get the correct reference to `this` in the $http.get method.
  var vm = this;
  var targetUrl = 'https://jsonplaceholder.typicode.com/posts';
  $http.get(targetUrl).then(function( response ) {
    // console.log(response);
    vm.posts = response.data;
  });
});

// Define Filters.
// Part 4 (continued)
app.filter('makePlural', function() {
  return function(input) {
    return input + 's';
  }
});

// Define Services.
// Part 6A: Services.
app.service('albumSvc', function( $http ) {
  // Relocating get call into a service.
  var targetUrl = 'https://jsonplaceholder.typicode.com/albums';

  this.getAlbums = function() {
    return $http.get(targetUrl);
  }
});

// Define Factories.
// Part 6B: Factory.
app.factory('commentSvc', function( $http ) {
  // Relocating get call into a service.
  var targetUrl = 'https://jsonplaceholder.typicode.com/comments';

  var getComments = function() {
    return $http.get(targetUrl);
  };

  return {
    getComments: getComments
  }
});

// Refactor into Components when possible.
// Part 7: Refactor into Simple Components.
