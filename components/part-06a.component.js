/* Component Definition */
app.component('part06a', {
  controller: Part06AController,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .part06a-component { margin: 0.5rem 1rem; }
      .part06a-component-content {
        padding: 0.5rem 1rem 0.2rem;
        background: #EEE;
        border: 1px solid #000;
      }
      .heading {
        margin: 1rem 0;
        font-weight: 900;
      }
      .input-field {
        margin: 0 0 1.5rem;
        padding: 0 1rem;
        width: 100%;
        height: 3rem;
        border: 1px solid rgba(0,0,0,0.4);
        border-bottom-width: 4px;
      }
    </style>
    <!-- TEMPLATE -->
    <div class="part06a-component">
      <button class="btn btn-block btn-dark"
              type="button"
              data-toggle="collapse"
              data-target="#collapsePart06A"
              aria-expanded="false"
              aria-controls="collapsePart06A">
        Services
      </button>
      <div class="collapse part06a-component-content" id="collapsePart06A">
        <p class="heading">Part 6A: Services - <i>List of Albums</i></p>
        <p>Search by value:</p>
        <input class="input-field" type="text" ng-model="vm.searchAlbums" />
        <ul ng-repeat="album in vm.albums | filter: vm.searchAlbums">
          <li>title: {{ album.title }}</li>
        </ul>
      </div>
    </div>`
});

/* We can rely on function hoisting here to make this entire method available to the component.
 * Remember: function hoisting works well, variable hoisting works poorly.
 */

// Part 6A. Albums Service.
/* Part06AController Controller */
function Part06AController( albumSvc ) {
  var vm = this;
  // console.log( vm );
  albumSvc.getAlbums().then(function(response) {
    vm.albums = response.data;
  });
}
