class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <nav id="nav"><a href=""><img src="assets/img/disasternews_logo.png"></a>
      <ul class="nav__list">
          <li><a href="">Home</a></li>
          <li><a href="news.html">News</a></li>
          <li><a href="map.html">Interactive Map</a></li>
          <li><a class="nav__login" href="login.html">Login</a></li>
      </ul>
      <div class="navbar__menu">
        <div class="menu_bar"></div>
        <div class="menu_bar"></div>
        <div class="menu_bar"></div>
      </div>
  </nav>
      `;
    }
}

customElements.define('nav-component', Nav);

class NavOpen extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <section class="navbar_slide">
        <nav class="nav--primary"><a href=""><img src="assets/img/disasternews_logo.png"></a>
            <div id="nav_close-btn">
                <div class="close_btn-bar1">
                    <div class="close_btn-bar2"></div>
                </div>
            </div>
        </nav>
        <ul class="slide_container">
            <li><a href="index.html">Home</a></li>
            <li><a href="news.html">News</a></li>
            <li><a href="map.html">Interactive map</a></li>
            <li><a href="login.html">Login</a></li>
        </ul>
    </section>
      `;
    }
}

customElements.define('navopen-component', NavOpen);