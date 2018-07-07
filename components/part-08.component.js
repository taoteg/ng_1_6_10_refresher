function Part08Controller() {
  // `this` reference required to get correct `this` in $http.get method.
  var vm = this;
  console.log( vm );
}

app.component('part08', {
  controller: Part08Controller,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
    </style>
    <!-- TEMPLATE -->
    <div class="lesson">
      <button class="btn btn-block btn-dark" type="button" data-toggle="collapse" data-target="#collapsePart08" aria-expanded="false" aria-controls="collapsePart08">
        Part 8: UI-Router
      </button>
      <div class="collapse" id="collapsePart08">
        <p class="heading">Using UI-Router</p>
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
