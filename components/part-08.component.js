/* Component Definition */
app.component('part08', {
  controller: Part08Controller,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .part08-component { margin: 0.5rem 1rem; }
      .part08-component-content {
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
    <div class="part08-component">
      <button class="btn btn-block btn-dark"
              type="button"
              data-toggle="collapse"
              data-target="#collapsePart08"
              aria-expanded="false"
              aria-controls="collapsePart08">
        UI-Router
      </button>
      <div class="collapse part08-component-content" id="collapsePart08">
        <p class="heading">Part 8: Using UI-Router</p>
        <p>Major refactor to site structure is now completed.</p>
        <p>
          <ul>
            <li>Refactored every part into separate component.</li>
            <li>Consolidated all components into Single Component Template files.</li>
            <li>Refactored Navigation into a component.</li>
            <li>Verified using nested components works.</li>
            <li>Refactored Home view into a component.</li>
            <li>Implemented ui-router to route using states.</li>
            <li>Need to implenent transitions between states next.</li>
          </ul>
        </p>
      </div>
    </div>`
});

/* We can rely on function hoisting here to make this entire method available to the component.
 * Remember: function hoisting works well, variable hoisting works poorly.
 */

// Part 8 - Refactor everything into Components.
/* Part08Controller Controller */
function Part08Controller() {
  var vm = this;
  // console.log( vm );
}
