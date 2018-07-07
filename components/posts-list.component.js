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
  // styles: ['.posts-list { color: #00C !important; }'],
  // styleUrls: './components/posts-list.component.css',
  templateUrl: './components/posts-list.component.html',
  controller: PostsListController,
  controllerAs: 'vm'
});
