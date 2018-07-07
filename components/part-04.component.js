function Part04Controller() {
  // `this` reference required to get correct `this` in $http.get method.
  var vm = this;
  console.log( vm );
  // Part 4. Filters.
  vm.cars = ['oldmosbile', 'hyundai', 'kia', 'ford', 'honda', 'kawasaki'];
}

app.component('part04', {
  controller: Part04Controller,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
    </style>
    <!-- TEMPLATE -->
    <div class="lesson">
      <button class="btn btn-block btn-dark" type="button" data-toggle="collapse" data-target="#collapsePart04" aria-expanded="false" aria-controls="collapsePart04">
        Part 4: Filters
      </button>
      <div class="collapse" id="collapsePart04">
        <div>
          <p class="heading">Filters: <i>List of Cars</i></p>
          <p>Search by value:</p>
          <input type="text" ng-model="vm.searchCar" />
          <ul ng-repeat="car in vm.cars | filter: vm.searchCar">
            <li>{{ car | makePlural }}</li>
          </ul>
        </div>
      </div>
    </div>`
});
