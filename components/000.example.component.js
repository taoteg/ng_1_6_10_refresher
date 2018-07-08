/* Component Definition */
app.component('exampleComponent', {
  controller: ExampleComponentController,
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
      <button class="btn btn-block btn-dark" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Example Component
      </button>
      <div class="collapse component-content" id="collapseExample">
        <p class="heading">Example Component</p>
        <p>This is an example component.</p>
      </div>
    </div>`
});

/* We can rely on function hoisting here to make this entire method available to the component.
 * Remember: function hoisting works well, variable hoisting works poorly.
 */

/* Example Controller */
function ExampleComponentController() {
  var vm = this;
  // console.log( vm );
}
