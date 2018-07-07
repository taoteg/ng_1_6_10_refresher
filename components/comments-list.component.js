function CommentsListController(commentSvc) {
  // Part 6B. Comments Factory (Part 7 - Refactored into Component)
  var vm = this;
  commentSvc.getComments().then(function(response) {
    vm.comments = response.data;
  });
}

app.component('commentsList', {
  controller: CommentsListController,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .comments-list {
        padding: 1rem;
        background: #EEE;
        border: 1px solid #000;
      }
    </style>
    <!-- TEMPLATE -->
    <div class="comments-list">
      <p class="heading">Factories: <i>List of Comments</i></p>
      <p>Search by value:</p>
      <input type="text" ng-model="vm.searchComments" />
      <ul ng-repeat="comment in vm.comments | filter: vm.searchComments">
        <li>body: {{ comment.body }}</li>
      </ul>
    </div>`
});
