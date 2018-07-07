function Part03Controller() {
  // `this` reference required to get correct `this` in $http.get method.
  var vm = this;
  console.log( vm );
  // Part 3. Directives.
  vm.fruits = ['apples', 'oranges','bananas'];
  vm.alertMe = function() {
    alert('something');
  }
}

app.component('part03', {
  controller: Part03Controller,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
    </style>
    <!-- TEMPLATE -->
    <div class="lesson">
      <button class="btn btn-block btn-dark" type="button" data-toggle="collapse" data-target="#collapsePart03" aria-expanded="false" aria-controls="collapsePart03">
        Part 3: Common Directives
      </button>
      <div class="collapse" id="collapsePart03">
        <p class="heading">Common Directives</p>
        <p>
          <i>List of Fruits</i>
          <ul ng-repeat="fruit in vm.fruits">
            <li>{{ fruit }}</li>
          </ul>
          <button class="btn btn-secondary" ng-click="vm.alertMe()">Alert</button>
        </p>
      </div>
    </div>`
});
