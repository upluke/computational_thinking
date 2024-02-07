import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("nav-bar")
export class NavBar extends LitElement {
  @property({ reflect: true, type: Boolean })
  open: boolean = false;

  render() {
    return html`
      <nav class="nav">
        <div class="container">
          <h1 class="logo">
            <a href="#">
              <svg class="icon">
                <use href="../icons/icons.svg#web-icon" />
              </svg>
            </a>
          </h1>
          <ul>
            <li class="active"><a href="#">Home</a></li>
            <li><a href="dsalgo.html">Data Structure & Algorithm</a></li>
            <li><a href="bigo.html">Big-O</a></li>
          </ul>
        </div>
      </nav>
    `;
  }

  static styles = css`
    .nav .container {
      background-color: blue;
      max-width: 1200px;
      margin: 0 auto;
    }
    .logo a {
      color: var(--primary-color);
      text-decoration: none;
      font-size: xxx-large;
      margin-left: 20px;
    }

    svg.icon {
      padding-top: 4px;
      /* display: inline; */
      height: 1.6em;
      width: 1.6em;
      vertical-align: top;
      fill: currentColor;
    }

    li {
      margin: 20px;
    }

    li a {
      color: #344e41;
      font-size: x-large;
      text-decoration: none;
    }

    li.active a {
      color: #588157;
    }

    .nav a:hover {
      color: #588157;
    }
  `;
  _handleChange(ev: InputEvent) {
    const target = ev.target as HTMLInputElement;
    this._toggle(target.checked);
  }
  _toggle(open: boolean) {
    this.open = open;
    this._toggleClickAway(open);
  }

  _toggleClickAway(open: boolean) {
    const clickawayHandler = (ev: Event) => {
      if (!ev.composedPath().includes(this)) {
        this._toggle(false);
      } else {
        ev.stopPropagation();
      }
    };

    if (open) {
      document.addEventListener("click", clickawayHandler);
    } else {
      document.removeEventListener("click", clickawayHandler);
    }
  }
}
