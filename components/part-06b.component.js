function Part06BController() {
  // `this` reference required to get correct `this` in $http.get method.
  var vm = this;
  console.log( vm );
}

app.component('part06b', {
  controller: Part06BController,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
    </style>
    <!-- TEMPLATE -->
    <div class="lesson">
      <button class="btn btn-block btn-dark" type="button" data-toggle="collapse" data-target="#collapsePart06B" aria-expanded="false" aria-controls="collapsePart06B">
        Part 6B: Factories
      </button>
      <div class="collapse" id="collapsePart06B">
        <comments-list></comments-list>
      </div>
    </div>`
});
