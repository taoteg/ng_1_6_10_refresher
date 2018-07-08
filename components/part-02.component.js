/* Component Definition */
app.component('part02', {
  controller: Part02Controller,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .part02-component { margin: 0.5rem 1rem; }
      .part02-component-content {
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
    <div class="part02-component">
      <button class="btn btn-block btn-dark"
              type="button"
              data-toggle="collapse"
              data-target="#collapsePart02"
              aria-expanded="false"
              aria-controls="collapsePart02">
        Part 2: Two-way Data Binding & Controllers
      </button>
      <div class="collapse part02-component-content" id="collapsePart02">
        <p class="heading">Two-way Data Binding & Controllers</p>
        <p>{{ vm.world }}</p>
        <p>{{ vm.inputtext }}</p>
        <input class="input-field" type="text" ng-model="vm.inputtext" />
      </div>
    </div>`
});

/* We can rely on function hoisting here to make this entire method available to the component.
 * Remember: function hoisting works well, variable hoisting works poorly.
 */

// Part 2. Two-way Data Binding & Controllers.
/* Part02Controller Controller */
function Part02Controller() {
  var vm = this;
  // console.log( vm );
  vm.world = 'hello';
  vm.inputtext = 'some text to start...';
}
