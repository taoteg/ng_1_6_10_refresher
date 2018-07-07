function Part07Controller() {
  // `this` reference required to get correct `this` in $http.get method.
  var vm = this;
  console.log( vm );
}

app.component('part07', {
  controller: Part07Controller,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
    </style>
    <!-- TEMPLATE -->
    <div class="lesson">
      <button class="btn btn-block btn-dark" type="button" data-toggle="collapse" data-target="#collapsePart07" aria-expanded="false" aria-controls="collapsePart07">
        Part 7: Simple Components
      </button>
      <div class="collapse" id="collapsePart07">
        <p class="heading">Simple Components</p>
        <p>Both the Albums Service and the Comments Factory have both been refactored into simple components under the hood. Dig into teh code to see the changes.</p>
      </div>
    </div>`
});
