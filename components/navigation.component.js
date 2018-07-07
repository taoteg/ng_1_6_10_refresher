function NavigationController( ) {
  // vm as `this` required to get correct reference to `this` in $http.get method.
  var vm = this;
  console.log( vm );
}

app.component('navigation', {
  controller: NavigationController,
  controllerAs: 'vm',
  template: `
    <!-- SINGLE PAGE COMPONENT -->
    <!-- COMPONENT STYLES -->
    <style>
      .bottom-border {
        border-bottom: 1px solid #111;
      }
      .dropdown-item:hover {
        color: #60C;
      }
      .dropdown-menu-title {
        margin: 0.5rem 1rem;
        color: #777;
      }
    </style>
    <!-- TEMPLATE -->
    <nav class="navbar navbar-expand-md navbar-light bg-light bottom-border">
      <a class="navbar-brand" ui-sref="home">AngularJS 1.6 Refresher</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <!--
          <li class="nav-item active">
            <a class="nav-link" ui-sref="home">Home <span class="sr-only">(current)</span></a>
          </li>
          -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Data
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <div class="dropdown-menu-title">Data</div>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item transition" ui-sref="posts">Posts</a>
              <a class="dropdown-item transition" ui-sref="albums">Albums</a>
              <a class="dropdown-item transition" ui-sref="comments">Comments</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Parts
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <div class="dropdown-menu-title">Parts</div>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item transition" ui-sref="example">00. Example Component</a>
              <a class="dropdown-item transition" ui-sref="part01">01. Getting Started</a>
              <a class="dropdown-item transition" ui-sref="part02">02. Two-way Data Binding & Controllers</a>
              <a class="dropdown-item transition" ui-sref="part03">03. Common Directives</a>
              <a class="dropdown-item transition" ui-sref="part04">04. Filters</a>
              <a class="dropdown-item transition" ui-sref="part05">05. $http Services</a>
              <a class="dropdown-item transition" ui-sref="part06a">06A. Services</a>
              <a class="dropdown-item transition" ui-sref="part06b">06B. Factories</a>
              <a class="dropdown-item transition" ui-sref="part07">07. Simple Components</a>
              <a class="dropdown-item transition" ui-sref="part08">08. UI-Router</a>
              <a class="dropdown-item transition" ui-sref="part09">09. Nested Routes</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>`
});
