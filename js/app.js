// Base Javascript file for app.
var app = angular.module('firstNgApp', []);

app.controller('mainCtrl', function( $http, albumSvc, commentSvc ) {

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
  $http.get(targetUrl).then(function(response) {
    // console.log(response);
    vm.posts = response.data;
  });

  // Part 6A. Services.
  albumSvc.getAlbums().then(function(response) {
    // console.log(response);
    vm.albums = response.data;
  });

  // Part 6B. Factories.
  commentSvc.getComments().then(function(response) {
    // console.log(response);
    vm.comments = response.data;
  });
});

// Part 4 (continued)
app.filter('makePlural', function() {
  return function(input) {
    return input + 's';
  }
});

// Part 6A: Services.
app.service('albumSvc', function($http) {
  // Relocating get call into a service.
  var targetUrl = 'https://jsonplaceholder.typicode.com/albums';

  this.getAlbums = function() {
    return $http.get(targetUrl);
  }
});

// Part 6B: Factory.
app.factory('commentSvc', function($http) {
  // Relocating get call into a service.
  var targetUrl = 'https://jsonplaceholder.typicode.com/comments';

  var getComments = function() {
    return $http.get(targetUrl);
  };

  return {
    getComments: getComments
  }
});
