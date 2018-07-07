function CommentsListController(commentSvc) {
  var vm = this;

  // Part 7. Comments Factory (6B) Refactored into Component.
  commentSvc.getComments().then(function(response) {
    // console.log(response);
    vm.comments = response.data;
  });
}

app.component('commentsList', {
  // styles: ['.comments-list { color: #0C0 !important; }'],
  // styleUrls: './components/comments-list.component.css',
  templateUrl: './components/comments-list.component.html',
  controller: CommentsListController,
  controllerAs: 'vm'
});
