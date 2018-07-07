function AlbumsListController(albumSvc) {
  var vm = this;

  // Part 7. Albums Service (6A) Refactored into Component.
  albumSvc.getAlbums().then(function(response) {
    // console.log(response);
    vm.albums = response.data;
  });
}

app.component('albumsList', {
  controller: AlbumsListController,
  controllerAs: 'vm',
  // styles: ['.albums-list { color: #C00 !important; }'],
  // styleUrls: './components/albums-list.component.css',
  // templateUrl: './components/albums-list.component.html',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .albums-list { color: #C00 !important; }
    </style>
    <!-- TEMPLATE -->
    <p class="heading albums-list">Services</p>
    <p>
      <i>List of Albums</i>
      <p>Search by value:</p>
      <input type="text" ng-model="vm.searchAlbums" />
      <ul ng-repeat="album in vm.albums | filter: vm.searchAlbums">
        <!-- <li>album: {{ album }}</li> -->
        <li>title: {{ album.title }}</li>
      </ul>
    </p>`
});
