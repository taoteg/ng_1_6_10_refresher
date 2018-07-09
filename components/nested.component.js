/* Component Definition */
app.component('nested', {
  controller: NestedComponentController,
  controllerAs: 'vm',
  // bindings: {
  //   // < denotes one-way bindings
  //   // = denotes two-way bidning
  //   // & denotes a function
  //   nestedLarva: '<'
  // },
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .nested-component { margin: 0.5rem 1rem; }
      .nested-component-content {
        padding: 0.5rem 1rem 0.2rem;
        background: #EEE;
        border: 1px solid #000;
      }
      .heading {
        margin: 1rem 0;
        font-weight: 900;
      }
    </style>
    <!-- TEMPLATE -->
    <div class="nested-component">
      <button class="btn btn-block btn-dark" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Nested Route
      </button>
      <div class="collapse nested-component-content" id="collapseExample">
        <p class="heading">Nested Route</p>
        <p>This is an example of a nested route with a component.</p>
        <p class="heading">Nested Larva</p>
        <ul ng-repeat="larva in vm.nestedLarva">
          <li>{{ larva }}</li>
        </ul>
      </div>
    </div>`
});

/* We can rely on function hoisting here to make this entire method available to the component.
 * Remember: function hoisting works well, variable hoisting works poorly.
 */

/* Example Controller */
function NestedComponentController() {
  // console.log($stateParams);
  var vm = this;
  // console.log( vm );

  vm.nestedLarva = ['bug','worm','fly'];
}
