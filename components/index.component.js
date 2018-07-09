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
      .introduction {
        margin: 1rem;
      }
    </style>
    <!-- TEMPLATE -->
    <div class="index-component row">
      <div class="col-xs-12 col-md-6">
        <div class="introduction">
          <h3>Welcome to the AngularJS 1.6 Refresher Course!</h3>
          <p>Can has Angular? Yes cans! We hope you enjoy your visit and learn lots of exciting NG skillz to stay 1337. Have teh nice D@y!!</p>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
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
        <example-component></example-component>
      </div>
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
