// Base Javascript file for app.

// Define App.
var app = angular.module('ngApp', ['ui.router']);

// Configure App.
app.config(function( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise('/');    // Catch all route.

  $stateProvider
    .state('home', {
      url: '/',
      template: '<index></index>'
    })
    .state('example', {
      url: '/example',
      template: '<example-component></example-component>'
    })
    .state('part01', {
      url: '/part01',
      template: '<part01></part01>'
    })
    .state('part02', {
      url: '/part02',
      template: '<part02></part02>'
    })
    .state('part03', {
      url: '/part03',
      template: '<part03></part03>'
    })
    .state('part04', {
      url: '/part04',
      template: '<part04></part04>'
    })
    .state('part05', {
      url: '/part05',
      template: '<part05></part05>'
    })
    .state('part06a', {
      url: '/part06a',
      template: '<part06a></part06a>'
    })
    .state('part06b', {
      url: '/part06b',
      template: '<part06b></part06b>'
    })
    .state('part07', {
      url: '/part07',
      template: '<part07></part07>'
    })
    .state('part08', {
      url: '/part08',
      template: '<part08></part08>'
    })
    .state('part09', {
      url: '/part09',
      template: '<part09></part09>'
    })
    .state('nest', {
      url: '/nest',
      template: '<ui-view></ui-view>'
    })
    .state('nest.nested', {
      // controllerAs: 'vm',
      url: '/nested',
      template: '<nested></nested>',
      // template: '<nested larva="vm.nestedLarva"></nested>',
      // resolve: {
      //   nestedLarva: function( $http ){
      //     $http.get('https://jsonplaceholder.typicode.com/albums')
      //          .then(response, function() {
      //            return response.data.splice(0,50);
      //          });
      //   }
      // }
    })
    .state('nest.nesting', {
      // controllerAs: 'vm',
      url: '/nesting',
      template: '<nesting></nesting>',
      // template: '<nesting larva="vm.nestingLarva"></nesting>',
      // resolve: {
      //   nestingLarva: function( albumSvc ) {
      //     return albumSvc.getAlbums('https://jsonplaceholder.typicode.com/albums');
      //   }
      // }
    });
});

// Define Main App Controller.
app.controller('appCtrl', function( $http ) {
  var vm = this;
  // console.log( vm );
});

// Define Filters.
app.filter('makePlural', function() {
  return function(input) {
    return input + 's';
  }
});

// Define Services.
app.service('albumSvc', function( $http ) {
  var targetUrl = 'https://jsonplaceholder.typicode.com/albums';

  this.getAlbums = function() {
    return $http.get(targetUrl);
  }
});

// Define Factories.
app.factory('commentSvc', function( $http ) {
  var targetUrl = 'https://jsonplaceholder.typicode.com/comments';

  var getComments = function() {
    return $http.get(targetUrl);
  };

  return {
    getComments: getComments
  }
});
