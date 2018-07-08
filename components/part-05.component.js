/* Component Definition */
app.component('part05', {
  controller: Part05Controller,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .part05-component { margin: 0.5rem 1rem; }
      .part05-component-content {
        padding: 0.5rem 1rem 0.2rem;
        background: #EEE;
        border: 1px solid #000;
      }
      .heading {
        margin: 1rem 0;
        font-weight: 900;
      }
      .input-field {
        margin: 0 0 1.5rem;
        padding: 0 1rem;
        width: 100%;
        height: 3rem;
        border: 1px solid rgba(0,0,0,0.4);
        border-bottom-width: 4px;
      }
    </style>
    <!-- TEMPLATE -->
    <div class="part05-component">
      <button class="btn btn-block btn-dark"
              type="button"
              data-toggle="collapse"
              data-target="#collapsePart05"
              aria-expanded="false"
              aria-controls="collapsePart05">
        Part 5: $http Service
      </button>
      <div class="collapse part05-component-content" id="collapsePart05">
        <p class="heading">$http Service: <i>List of Posts</i></p>
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

// Part 5: $http Service.
/* Part05Controller Controller */
function Part05Controller( $http ) {
  var vm = this;
  // console.log( vm );
  var targetUrl = 'https://jsonplaceholder.typicode.com/posts';
  $http.get(targetUrl).then(function( response ) {
    vm.posts = response.data;
  });
}
