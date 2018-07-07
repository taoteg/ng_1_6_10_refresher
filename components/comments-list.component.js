function CommentsListController(commentSvc) {
  var vm = this;

  // Part 7. Comments Factory (6B) Refactored into Component.
  commentSvc.getComments().then(function(response) {
    // console.log(response);
    vm.comments = response.data;
  });
}

app.component('commentsList', {
  controller: CommentsListController,
  controllerAs: 'vm',
  // styles: ['.comments-list { color: #0C0 !important; }'],
  // styleUrls: './components/comments-list.component.css',
  // templateUrl: './components/comments-list.component.html',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .comments-list { color: #0C0 !important; }
    </style>
    <!-- TEMPLATE -->
    <p class="heading comments-list">Factories</p>
    <p>
      <i>List of Comments</i>
      <p>Search by value:</p>
      <input type="text" ng-model="vm.searchComments" />
      <ul ng-repeat="comment in vm.comments | filter: vm.searchComments">
        <!-- <li>comment: {{ comment }}</li> -->
        <li>body: {{ comment.body }}</li>
      </ul>
    </p>`
});
