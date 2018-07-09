/* Component Definition */
app.component('part04', {
  controller: Part04Controller,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .part04-component { margin: 0.5rem 1rem; }
      .part04-component-content {
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
    <div class="part04-component">
      <button class="btn btn-block btn-dark"
              type="button"
              data-toggle="collapse"
              data-target="#collapsePart04"
              aria-expanded="false"
              aria-controls="collapsePart04">
        Filters
      </button>
      <div class="collapse part04-component-content" id="collapsePart04">
        <p class="heading">Part 4: Filters - <i>List of Cars</i></p>
        <p>Search by value:</p>
        <input class="input-field" type="text" ng-model="vm.searchCar" />
        <ul ng-repeat="car in vm.cars | filter: vm.searchCar">
          <li>{{ car | makePlural }}</li>
        </ul>
      </div>
    </div>`
});

/* We can rely on function hoisting here to make this entire method available to the component.
 * Remember: function hoisting works well, variable hoisting works poorly.
 */

// Part 4. Filters.
/* Part04Controller Controller */
function Part04Controller() {
  var vm = this;
  // console.log( vm );
  vm.cars = ['oldmosbile', 'hyundai', 'kia', 'ford', 'honda', 'kawasaki'];
}
