/* Component Definition */
app.component('part01', {
  controller: Part01Controller,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .part01-component { margin: 0.5rem 1rem; }
      .part01-component-content {
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
    <div class="part01-component">
      <button class="btn btn-block btn-dark"
              type="button"
              data-toggle="collapse"
              data-target="#collapsePart01"
              aria-expanded="false"
              aria-controls="collapsePart01">
        Getting Started
      </button>
      <div class="collapse part01-component-content" id="collapsePart01">
        <p class="heading">Part 01: Getting Started</p>
        <p>The Sky is {{2>1}} blue</p>
      </div>
    </div>`
});

/* We can rely on function hoisting here to make this entire method available to the component.
 * Remember: function hoisting works well, variable hoisting works poorly.
 */

// Part 1. Basically working.
/* Part01Controller Controller */
function Part01Controller() {
  var vm = this;
  // console.log( vm );
}
