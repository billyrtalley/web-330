class Nav extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <nav class="navbar navbar-customclass navbar-expand-sm">

      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <p class="navbar-brand">B | T</p>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="resume.html">Resume</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="work.html">Work</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="api.html">APIs</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="databases.html">Databases</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="bucket-list.html">Bucket List</a>
        </li>
        </ul>
      
          </div>
  </nav>`;
    }
}

customElements.define("nav-component", Nav);