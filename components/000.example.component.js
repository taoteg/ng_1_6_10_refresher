function ExampleComponentController() {
  // `this` reference required to get correct `this` in $http.get method.
  var vm = this;
  console.log( vm );
}

app.component('exampleComponent', {
  controller: ExampleComponentController,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
    </style>
    <!-- TEMPLATE -->
    <div class="lesson">
      <button class="btn btn-block btn-dark" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Example Component
      </button>
      <div class="collapse" id="collapseExample">
        <p class="heading">Example Component</p>
        <p>This is an example component.</p>
      </div>
    </div>`
});
