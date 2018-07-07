function Part05Controller() {
  // `this` reference required to get correct `this` in $http.get method.
  var vm = this;
  console.log( vm );
}

app.component('part05', {
  controller: Part05Controller,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
    </style>
    <!-- TEMPLATE -->
    <div class="lesson">
      <button class="btn btn-block btn-dark" type="button" data-toggle="collapse" data-target="#collapsePart05" aria-expanded="false" aria-controls="collapsePart05">
        Part 5: $http Service
      </button>
      <div class="collapse" id="collapsePart05">
        <posts-list></posts-list>
      </div>
    </div>`
});
