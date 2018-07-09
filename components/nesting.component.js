/* Component Definition */
app.component('nesting', {
  controller: NestingComponentController,
  controllerAs: 'vm',
  // bindings: {
  //   // < denotes one-way bindings
  //   // = denotes two-way bidning
  //   // & denotes a function
  //   nestingLarva: '<'
  // },
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .nesting-component { margin: 0.5rem 1rem; }
      .nesting-component-content {
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
    <div class="nesting-component">
      <button class="btn btn-block btn-dark" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Nesting Route
      </button>
      <div class="collapse nesting-component-content" id="collapseExample">
        <p class="heading">Nesting Route</p>
        <p>This is an example of a nesting route with a component.</p>
        <p class="heading">Nesting Larva</p>
        <ul ng-repeat="larva in vm.nestingLarva">
          <li>{{ larva }}</li>
        </ul>
      </div>
    </div>`
});

/* We can rely on function hoisting here to make this entire method available to the component.
 * Remember: function hoisting works well, variable hoisting works poorly.
 */

/* Example Controller */
function NestingComponentController() {
  // console.log($stateParams);
  var vm = this;
  // console.log( vm );

  vm.nestingLarva = ['moth','caterpillar','spider'];
}
