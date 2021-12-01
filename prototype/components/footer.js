class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer id="footer">
        <section class="container-row">
            <div class="footer__left"><a href="index.html"><img src="assets/img/disasternews_logo_white.png"></a>
                <p class="content--secondary">
                Follow events around the world, and stay informed with our interactive map which shows you the latest natural disasters live.
                </p>
            </div>
            <div class="footer__right">
                <div class="footer__right__list">
                    <h3>More news</h3>
                    <ul>
                        <li><a href="https://news.google.com/search?q=natural%20disaster&hl=en-GB&gl=GB&ceid=GB%3Aen" target="_blank">Google news</a></li>
                        <li><a href="https://appliedsciences.nasa.gov/what-we-do/disasters/disaster-activations#latest" target="_blank">Nasa disaster</a></li>
                    </ul>
                </div>
                <div class="footer__right__list">
                    <h3>QuickLinks</h3>
                    <ul>
                        <li><a href="news.html">News</a>
                        </li>
                        <li><a href="map.html">Interactive map</a></li>
                    </ul>
                </div>
                <div class="footer__right__list">
                    <h3>Useful links</h3>
                    <ul>
                        <li><a href="privacy-policy.html">Privacy policy</a></li>
                    </ul>
                </div>
            </div>
        </section>
    </footer>
      `;
    }
}

customElements.define('footer-component', Footer);