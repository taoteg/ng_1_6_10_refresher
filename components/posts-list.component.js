function PostsListController( $http ) {
  // Part 5: $http Service.
  // vm as `this` required to get correct reference to `this` in $http.get method.
  var vm = this;
  var targetUrl = 'https://jsonplaceholder.typicode.com/posts';
  $http.get(targetUrl).then(function( response ) {
    vm.posts = response.data;
  });
}

app.component('postsList', {
  controller: PostsListController,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .posts-list {
        padding: 1rem;
        background: #EEE;
        border: 1px solid #000;
      }
    </style>
    <!-- TEMPLATE -->
    <div class="posts-list">
      <p class="heading">$http Service: <i>List of Posts</i></p>
      <p>Search by value:</p>
      <input type="text" ng-model="vm.searchPosts" />
      <ul ng-repeat="post in vm.posts | filter: vm.searchPosts">
        <li>title: {{ post.title }}</li>
      </ul>
    </div>`
});
