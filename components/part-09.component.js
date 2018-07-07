function Part09Controller() {
  // `this` reference required to get correct `this` in $http.get method.
  var vm = this;
  console.log( vm );
}

app.component('part09', {
  controller: Part09Controller,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
    </style>
    <!-- TEMPLATE -->
    <div class="lesson">
      <button class="btn btn-block btn-dark" type="button" data-toggle="collapse" data-target="#collapsePart09" aria-expanded="false" aria-controls="collapsePart09">
        Part 9: Nested Routes with UI-Router
      </button>
      <div class="collapse" id="collapsePart09">
        <p class="heading">Nested Routes with UI-Router</p>
      </div>
    </div>`
});
