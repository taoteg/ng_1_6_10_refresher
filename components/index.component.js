function IndexController() {
  // `this` reference required to get correct `this` in $http.get method.
  var vm = this;
  console.log( vm );
}

app.component('index', {
  controller: IndexController,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
    </style>
    <!-- TEMPLATE -->
    <example-component></example-component>
    <part01></part01>
    <part02></part02>
    <part03></part03>
    <part04></part04>
    <part05></part05>
    <part06a></part06a>
    <part06b></part06b>
    <part07></part07>
    <part08></part08>
    <part09></part09>`
});
