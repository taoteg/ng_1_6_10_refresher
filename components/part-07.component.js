/* Component Definition */
app.component('part07', {
  controller: Part07Controller,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .component {}
      .component-content {
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
    <div class="component">
      <button class="btn btn-block btn-dark"
              type="button"
              data-toggle="collapse"
              data-target="#collapsePart07"
              aria-expanded="false"
              aria-controls="collapsePart07">
        Part 7: Simple Components
      </button>
      <div class="collapse component-content" id="collapsePart07">
        <p class="heading">Simple Components</p>
        <p>Both the Albums Service and the Comments Factory have both been refactored into simple components under the hood. Dig into teh code to see the changes.</p>
      </div>
    </div>`
});

/* We can rely on function hoisting here to make this entire method available to the component.
 * Remember: function hoisting works well, variable hoisting works poorly.
 */

// Part 7 - Code a simple component.
/* Part07Controller Controller */
function Part07Controller() {
  var vm = this;
  // console.log( vm );
}
