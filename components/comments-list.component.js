function CommentsListController(commentSvc) {
  var vm = this;

  // Part 7. Comments Factory (6B) Refactored into Component.
  commentSvc.getComments().then(function(response) {
    // console.log(response);
    vm.comments = response.data;
  });
}

app.component('commentsList', {
  templateUrl: './components/comments-list.html',
  controller: CommentsListController,
  controllerAs: 'vm'
});
