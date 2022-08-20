class Footy extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
            <footer class="container-fluid">
            <div id="footer-details" class="row">
                <div class="col-sm-4">
                    <h5 class="uppercase general-sub">About</h5>
                    <p class="inline-block">Hardworking writer and performer. Available for events and workshops.</p>
                </div>
    
                <div class="col-sm-4">
                    <h5 class="uppercase general-sub">social</h5>
                    <ul class="list-inline social-links">
                        <li class="list-inline-item">
                            <a target="_blank" href="https://www.instagram.com/verycarriesully/">
                                <i class="bi bi-instagram" aria-hidden="true"></i>
                                <span class="visually-hidden-focusable">Instagram</span>                               
                            </a>
                        </li>
    
                        <li class="list-inline-item">
                            <a target="_blank" href="https://twitter.com/verycarriesully">
                                <i class="bi bi-twitter" aria-hidden="true"></i>
                                <span class="visually-hidden-focusable">Twitter</span>                               
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    
        </footer>
        

            `;
  }
}

customElements.define('footer-element', Footy);

class Heady extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header>
      <div class="row g-0">
          <a href="index.html"  class="col-md-4 logo">  </a>

          <div class="col-md-8">
              <div class="row g-0 bg-color-name-title">
                  <div class="col heading">
                      <h1 class="name">Carrie Sully</h1>
                      <h2 class="title">Comedy</h2>
                  </div>
              </div>
              <div class="row g-0">
                  <div class="col">
                      <ul id="nav" class="list-inline menucontainer">
                          <li class="col-6 col-sm-3 ui-menu-color-home list-inline-item menuitem">
                              <a href="index.html" class="hvr-sweep-to-bottom"><i class="bi bi-house-fill" aria-hidden="true"></i><span>home</span></a>
                          </li>
                          <li class="col-6 col-sm-3  ui-menu-color-upcoming list-inline-item menuitem">
                              <a href="upcoming.html" class="hvr-sweep-to-bottom"><i class="bi bi-calendar-fill" aria-hidden="true"></i><span>upcoming</span></a>
                          </li>
                          <li class="col-6 col-sm-3  ui-menu-color-contact list-inline-item menuitem">
                              <a href="contact.html" class="hvr-sweep-to-bottom"><i class="bi bi-pencil-fill" aria-hidden="true"></i><span>contact</span></a>
                          </li>
                          <li class="col-6 col-sm-3  ui-menu-color-download list-inline-item menuitem">
                              <a href="media\carriesullybio.pdf"  target="_blank" class="hvr-sweep-to-bottom"><i class="bi bi-file-arrow-down-fill" aria-hidden="true"></i><span>download</span></a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>

  </header>
        

            `;
  }
}

customElements.define('header-element', Heady);