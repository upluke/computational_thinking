import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./toggle-switch";
import "./user-panel";
import "./drop-down";
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
            <a href="/app">
              <svg class="icon">
                <use href="../../icons/icons.svg#web-icon" />
              </svg>
            </a>
          </h1>
          <ul>
            <li class="active"><a href="/app">Home</a></li>
            <li><a href="/app/dsalgo-page">Data Structure & Algorithm</a></li>
            <li><a href="/app/bigo-page">Big-O</a></li>
          </ul>
        </div>
        <div class="nav-right">
          <toggle-switch @change=${this._toggleDarkMode}>
            Dark Mode
          </toggle-switch>
          <drop-down>
            <img
              class="user-avatar"
              src="https://www.svgrepo.com/show/420351/avatar-boy-kid.svg"
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
      height: 85px;
    }
    .nav {
      position: fixed;
      /* width: auto; */
      background-color: var(--background-color);
      width: 100%;

      /* margin: 0 auto; */
      display: flex;
      justify-content: space-between;
      z-index: 99;
      box-shadow: 0 0 8px 0 var(--secondary-color);
    }
    .nav-left {
      display: flex;
      /* padding-bottom: 10px; */
      /* background-color: yellow; */
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
      padding-top: 10px;
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
      color: var(--primary-color);
      font-size: x-large;
      text-decoration: none;
    }

    li.active a {
      color: var(--secondary-color);
    }

    .nav a:hover {
      color: var(--secondary-color);
    }

    /* avatar */

    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-left: 12px;
      margin-right: 12px;
    }

    .user-info {
      /* display: flex; */
      /* align-items: center; */
      margin-bottom: 12px;
    }
  `;

  _toggleDarkMode(ev: InputEvent) {
    const target = ev.target as ToggleSwitchElement;
    const body = document.body;

    console.log("Toggling Dark mode", ev);

    if (target?.on) body.classList.add("dark-mode");
    else body.classList.remove("dark-mode");
  }
}
