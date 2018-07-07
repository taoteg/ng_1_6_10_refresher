function Part06AController() {
  // `this` reference required to get correct `this` in $http.get method.
  var vm = this;
  console.log( vm );
}

app.component('part06a', {
  controller: Part06AController,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
    </style>
    <!-- TEMPLATE -->
    <div class="lesson">
      <button class="btn btn-block btn-dark" type="button" data-toggle="collapse" data-target="#collapsePart06A" aria-expanded="false" aria-controls="collapsePart06A">
        Part 6A: Services
      </button>
      <div class="collapse" id="collapsePart06A">
        <albums-list></albums-list>
      </div>
    </div>`
});
