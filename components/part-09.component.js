/* Component Definition */
app.component('part09', {
  controller: Part09Controller,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .part09-component { margin: 0.5rem 1rem; }
      .part09-component-content {
        padding: 0.5rem 1rem 0.2rem;
        background: #EEE;
        border: 1px solid #000;
      }
      .heading {
        margin: 1rem 0;
        font-weight: 900;
      }
    </style>
    <!-- TEMPLATE -->
    <div class="part09-component">
      <button class="btn btn-block btn-dark"
              type="button"
              data-toggle="collapse"
              data-target="#collapsePart09"
              aria-expanded="false"
              aria-controls="collapsePart09">
        Part 9: Nested Routes with UI-Router
      </button>
      <div class="collapse part09-component-content" id="collapsePart09">
        <p class="heading">Nested Route: <i>List of Posts</i></p>
        <p>Search by value:</p>
        <input class="input-field" type="text" ng-model="vm.searchPosts" />
        <ul ng-repeat="post in vm.posts | filter: vm.searchPosts">
          <li>title: {{ post.title }}</li>
        </ul>
      </div>
    </div>`
});

/* We can rely on function hoisting here to make this entire method available to the component.
 * Remember: function hoisting works well, variable hoisting works poorly.
 */

// Part 9 - Nested routes in ui-router.
/* Part09Controller Controller */
function Part09Controller( $http ) {
  var vm = this;
  // console.log( vm );
  var targetUrl = 'https://jsonplaceholder.typicode.com/posts';
  $http.get(targetUrl).then(function( response ) {
    vm.completePosts = response.data;
    vm.incompletePosts = vm.completePosts.splice(0, 50);
    // vm.posts = vm.completePosts;
    vm.posts = vm.incompletePosts;
    console.log(vm.posts);
  });
}
