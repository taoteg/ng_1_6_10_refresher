/* Component Definition */
app.component('part03', {
  controller: Part03Controller,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .part03-component { margin: 0.5rem 1rem; }
      .part03-component-content {
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
    <div class="part03-component">
      <button class="btn btn-block btn-dark"
              type="button"
              data-toggle="collapse"
              data-target="#collapsePart03"
              aria-expanded="false"
              aria-controls="collapsePart03">
        Common Directives
      </button>
      <div class="collapse part03-component-content" id="collapsePart03">
        <p class="heading">Part 3: Common Directives</p>
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

/* We can rely on function hoisting here to make this entire method available to the component.
 * Remember: function hoisting works well, variable hoisting works poorly.
 */

// Part 3. Directives.
/* Part03Controller Controller */
function Part03Controller() {
  var vm = this;
  // console.log( vm );
  vm.fruits = ['apples', 'oranges','bananas'];
  vm.alertMe = function() {
    alert('something');
  }
}
