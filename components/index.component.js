/* Component Definition */
app.component('index', {
  controller: IndexController,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .index-component {
        /* STYLES */
      }
    </style>
    <!-- TEMPLATE -->
    <div class="index-component">
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
      <part09></part09>
    </div>`
});

/* We can rely on function hoisting here to make this entire method available to the component.
 * Remember: function hoisting works well, variable hoisting works poorly.
 */

/* IndexController Controller */
function IndexController() {
  var vm = this;
  // console.log( vm );
}
