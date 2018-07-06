function AlbumsListController(albumSvc) {
  var vm = this;

  // Part 7. Albums Service (6A) Refactored into Component.
  albumSvc.getAlbums().then(function(response) {
    // console.log(response);
    vm.albums = response.data;
  });
}

app.component('albumsList', {
  styleUrls: './components/albums-list.component.css',
  templateUrl: './components/albums-list.html',
  controller: AlbumsListController,
  controllerAs: 'vm'
});
