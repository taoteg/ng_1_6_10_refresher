function AlbumsListController(albumSvc) {
  // Part 6A. Albums Service (Part 7 - Refactored into Component)
  var vm = this;
  albumSvc.getAlbums().then(function(response) {
    vm.albums = response.data;
  });
}

app.component('albumsList', {
  controller: AlbumsListController,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .albums-list {
        padding: 1rem;
        background: #EEE;
        border: 1px solid #000;
      }
    </style>
    <!-- TEMPLATE -->
    <div class="albums-list">
      <p class="heading">Services: <i>List of Albums</i></p>
      <p>Search by value:</p>
      <input type="text" ng-model="vm.searchAlbums" />
      <ul ng-repeat="album in vm.albums | filter: vm.searchAlbums">
        <li>title: {{ album.title }}</li>
      </ul>
    </div>`
});
