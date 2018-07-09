/* Component Definition */
app.component('navigation', {
  controller: NavigationController,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      nav {
        font-size: 1.2rem;
      }
      .bottom-border {
        border-bottom: 1px solid #111;
      }
      .dropdown-item {
        font-weight: 900;
        color: #111;
      }
      .navbar-brand:hover {
        color: #30A !important;
      }
      .dropdown-item:hover {
        /* background: #EEF; */
        color: #30A;
        padding-left: 2rem;
      }
      .dropdown-item > span {
        margin-right: 0.5rem;
      }
      .dropdown-menu-title {
        margin: 0.5rem 1rem;
        color: #777;
      }
    </style>
    <!-- TEMPLATE -->
    <nav class="navbar navbar-expand-md navbar-light bg-light bottom-border">
      <a class="navbar-brand transition" ui-sref="home">AngularJS 1.6 Refresher</a>
      <button class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <!--<li class="nav-item active">
            <a class="nav-link" ui-sref="home"><span class="fa fa-home"></span></a>
          </li>-->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle transition"
               href="#"
               id="partsDropdown"
               role="button"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false">
              Parts
            </a>
            <div class="dropdown-menu" aria-labelledby="partsDropdown">
              <a class="dropdown-item transition" ui-sref="example"><span class="fa fa-futbol"></span>Part 00. Example Component</a>
              <a class="dropdown-item transition" ui-sref="part01"><span class="fa fa-futbol"></span>Part 01. Getting Started</a>
              <a class="dropdown-item transition" ui-sref="part02"><span class="fa fa-futbol"></span>Part 02. Two-way Data Binding & Controllers</a>
              <a class="dropdown-item transition" ui-sref="part03"><span class="fa fa-futbol"></span>Part 03. Common Directives</a>
              <a class="dropdown-item transition" ui-sref="part04"><span class="fa fa-futbol"></span>Part 04. Filters</a>
              <a class="dropdown-item transition" ui-sref="part05"><span class="fa fa-futbol"></span>Part 05. $http Services</a>
              <a class="dropdown-item transition" ui-sref="part06a"><span class="fa fa-futbol"></span>Part 06A. Services</a>
              <a class="dropdown-item transition" ui-sref="part06b"><span class="fa fa-futbol"></span>Part 06B. Factories</a>
              <a class="dropdown-item transition" ui-sref="part07"><span class="fa fa-futbol"></span>Part 07. Simple Components</a>
              <a class="dropdown-item transition" ui-sref="part08"><span class="fa fa-futbol"></span>Part 08. UI-Router</a>
              <a class="dropdown-item transition" ui-sref="part09"><span class="fa fa-futbol"></span>Part 09. Nested Routes</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>`
});

/* We can rely on function hoisting here to make this entire method available to the component.
 * Remember: function hoisting works well, variable hoisting works poorly.
 */

/* NavigationController Controller */
function NavigationController( ) {
  var vm = this;
  // console.log( vm );
}
