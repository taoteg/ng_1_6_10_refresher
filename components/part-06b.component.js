/* Component Definition */
app.component('part06b', {
  controller: Part06BController,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .part06b-component { margin: 0.5rem 1rem; }
      .part06b-component-content {
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
    <div class="part06b-component">
      <button class="btn btn-block btn-dark"
              type="button"
              data-toggle="collapse"
              data-target="#collapsePart06B"
              aria-expanded="false"
              aria-controls="collapsePart06B">
        Factories
      </button>
      <div class="collapse part06b-component-content" id="collapsePart06B">
        <p class="heading">Part 6B: Factories - <i>List of Comments</i></p>
        <p>Search by value:</p>
        <input class="input-field" type="text" ng-model="vm.searchComments" />
        <ul ng-repeat="comment in vm.comments | filter: vm.searchComments">
          <li>body: {{ comment.body }}</li>
        </ul>
      </div>
    </div>`
});

/* We can rely on function hoisting here to make this entire method available to the component.
 * Remember: function hoisting works well, variable hoisting works poorly.
 */

// Part 6B. Comments Factory.
/* Part06BController Controller */
function Part06BController( commentSvc ) {
  var vm = this;
  // console.log( vm );
  commentSvc.getComments().then(function(response) {
    vm.comments = response.data;
  });
}
