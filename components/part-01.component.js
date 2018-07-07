function Part01Controller() {
  // `this` reference required to get correct `this` in $http.get method.
  var vm = this;
  console.log( vm );
}

app.component('part01', {
  controller: Part01Controller,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
    </style>
    <!-- TEMPLATE -->
    <div class="lesson">
      <button class="btn btn-block btn-dark" type="button" data-toggle="collapse" data-target="#collapsePart01" aria-expanded="false" aria-controls="collapsePart01">
        Part 1: Getting Started
      </button>
      <div class="collapse" id="collapsePart01">
        <p class="heading">Getting Started</p>
        <p>The Sky is {{2>1}} blue</p>
      </div>
    </div>`
});
