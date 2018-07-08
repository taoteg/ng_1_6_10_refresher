/* Component Definition */
app.component('part09', {
  controller: Part09Controller,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .part09-component { margin: 0.5rem 1rem; }
      .part09-component-content {
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
    <div class="part09-component">
      <button class="btn btn-block btn-dark"
              type="button"
              data-toggle="collapse"
              data-target="#collapsePart09"
              aria-expanded="false"
              aria-controls="collapsePart09">
        Part 9: Nested Routes with UI-Router
      </button>
      <div class="collapse part09-component-content" id="collapsePart09">
        <p class="heading">Nested Routes with UI-Router</p>
        <p>Stuff will go here eventually...</p>
      </div>
    </div>`
});

/* We can rely on function hoisting here to make this entire method available to the component.
 * Remember: function hoisting works well, variable hoisting works poorly.
 */

// Part 9 - Nested routes in ui-router.
/* Part09Controller Controller */
function Part09Controller() {
  var vm = this;
  // console.log( vm );
}
