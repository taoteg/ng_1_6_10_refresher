function PostsListController( $http ) {
  // Part 5: $http Service.
  // declaring vm as `this` is required to get the correct reference to `this` in the $http.get method.
  var vm = this;
  var targetUrl = 'https://jsonplaceholder.typicode.com/posts';
  $http.get(targetUrl).then(function( response ) {
    // console.log(response);
    vm.posts = response.data;
  });
}

app.component('postsList', {
  controller: PostsListController,
  controllerAs: 'vm',
  // styles: ['.posts-list { color: #00C !important; }'],
  // styleUrls: './components/posts-list.component.css',
  // templateUrl: './components/posts-list.component.html',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .posts-list { color: #00C !important; }
    </style>
    <!-- TEMPLATE -->
    <p class="heading posts-list">$http Service</p>
    <p>
      <i>List of Posts</i>
      <p>Search by value:</p>
      <input type="text" ng-model="vm.searchPosts" />
      <ul ng-repeat="post in vm.posts | filter: vm.searchPosts">
        <li>title: {{ post.title }}</li>
      </ul>
    </p>`
});
