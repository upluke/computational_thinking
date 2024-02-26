import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./toggle-switch";
import { ToggleSwitchElement } from "./toggle-switch";
@customElement("nav-bar")
export class NavBar extends LitElement {
  @property({ reflect: true, type: Boolean })
  open: boolean = false;

  render() {
    return html`
      <nav class="nav">
        <div class="nav-left">
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
        <div class="nav-right">
          <toggle-switch @change=${this._toggleDarkMode}>
            Dark Mode
          </toggle-switch>
          <drop-down>
            <img
              class="user-avatar"
              src="https://www.svgrepo.com/show/382112/female-avatar-girl-face-woman-user-8.svg"
              alt="User Avatar"
            />
            <user-panel slot="menu"></user-panel>
          </drop-down>
        </div>
      </nav>
    `;
  }

  static styles = css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    :host {
      width: 100%;
    }
    .nav {
      /* position: fixed; */
      width: auto;
      background-color: blue;
      width: 100%;
      /* margin: 0 auto; */
      display: flex;
      justify-content: space-between;
    }
    .nav-left {
      display: flex;
      background-color: yellow;
    }
    .nav-right {
      display: flex;
      align-items: center;
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
    ul {
      display: flex;
      list-style-type: none;
      padding-top: 8px;
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

    /* avatar */

    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 12px;
    }

    .user-info {
      /* display: flex; */
      /* align-items: center; */
      margin-bottom: 12px;
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

  _toggleDarkMode(ev: InputEvent) {
    const target = ev.target as ToggleSwitchElement;
    const body = document.body;

    console.log("Toggling Dark mode", ev);

    if (target?.on) body.classList.add("dark-mode");
    else body.classList.remove("dark-mode");
  }
}
