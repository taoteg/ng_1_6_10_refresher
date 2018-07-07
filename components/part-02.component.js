function Part02Controller() {
  // `this` reference required to get correct `this` in $http.get method.
  var vm = this;
  console.log( vm );
  // Part 2. Two-way Data Binding & Controllers.
  vm.world = 'hello';
  vm.inputtext = 'some text to start...';
}

app.component('part02', {
  controller: Part02Controller,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
    </style>
    <!-- TEMPLATE -->
    <div class="lesson">
      <button class="btn btn-block btn-dark" type="button" data-toggle="collapse" data-target="#collapsePart02" aria-expanded="false" aria-controls="collapsePart02">
        Part 2: Two-way Data Binding & Controllers
      </button>
      <div class="collapse" id="collapsePart02">
        <p class="heading">Two-way Data Binding & Controllers</p>
        <p>{{ vm.world }}</p>
        <p>{{ vm.inputtext }}</p>
        <input type="text" ng-model="vm.inputtext" />
      </div>
    </div>`
});
