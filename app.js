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
    })
    .state('albums', {
      url: '/albums',
      templateUrl: '<albums-list></albums-list>'
    })
    .state('comments', {
      url: '/comments',
      templateUrl: '<comments-list></comments-list>'
    })
    .state('step01', {
      url: '/step01',
      templateUrl: '<step01></step01>'
    })
    .state('step02', {
      url: '/step02',
      templateUrl: '<step02></step02>'
    })
    .state('step03', {
      url: '/step03',
      templateUrl: '<step03></step03>'
    })
    .state('step04', {
      url: '/step04',
      templateUrl: '<step04></step04>'
    })
    .state('step05', {
      url: '/step05',
      templateUrl: '<step05></step05>'
    })
    .state('step06', {
      url: '/step06',
      templateUrl: '<step06></step06>'
    })
    .state('step07', {
      url: '/step07',
      templateUrl: '<step07></step07>'
    })
    .state('step08', {
      url: '/step08',
      templateUrl: '<step08></step08>'
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
