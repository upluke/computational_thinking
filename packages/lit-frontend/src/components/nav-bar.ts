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
      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      />
      <nav class="nav" id="myTopnav">
        <div class="nav-left">
          <h1 class="logo">
            <a href="/app">
              <svg class="icon">
                <use href="/icons/icons.svg#web-icon" />
              </svg>
            </a>
          </h1>
        </div>
        <div class="nav-mid">
          <ul>
            <li class="active"><a href="/app">Home</a></li>
            <li><a href="/app/dsalgo-page">Data Structure & Algorithm</a></li>
            <li><a href="/app/bigo-page">Big-O</a></li>
          </ul>
        </div>
        <div class="nav-right">
          <drop-down>
            <i class="bx bx-menu"></i>
            <user-panel slot="menu">
              <img
                slot="avatar"
                class="user-avatar"
                src="https://www.svgrepo.com/show/420351/avatar-boy-kid.svg"
                alt="User Avatar"
              />

              <li class="burger"><a href="/app">Home</a></li>
              <li class="burger">
                <a href="/app/dsalgo-page">Data Structure & Algorithm</a>
              </li>
              <li class="burger"><a href="/app/bigo-page">Big-O</a></li>

              <li>
                <toggle-switch @change=${this._toggleDarkMode}>
                  Dark Mode
                </toggle-switch>
              </li>
            </user-panel>
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
      /* z-index: 99; */
    }
    .nav {
      position: fixed;
      width: 100%;
      background-color: var(--background-color);

      /* overflow: hidden; */
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
    .nav-mid {
      /* display: flex; */
      flex-grow: 1;
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
    .nav-mid ul {
      display: flex;
      list-style-type: none;
      padding-top: 8px;
    }
    .nav-mid li {
      margin: 20px;
    }

    .nav-mid li a {
      font-size: x-large;
    }
    li a {
      color: var(--primary-color);
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

    .nav-mid {
      display: none;
    }

    @media (min-width: 768px) {
      .nav-mid {
        display: block;
      }

      /* .nav-right {
        display: none;
      } */
      /* .nav {
        display: flex;
        justify-content: flex-end;
      } */
      .nav .burger {
        display: none;
      }
      /* .nav .burger {
        display: block;
      } */
    }
  `;

  _toggleDarkMode(ev: InputEvent) {
    const target = ev.target as ToggleSwitchElement;
    const body = document.body;

    console.log("Toggling Dark mode", ev);

    if (target?.on) body.classList.add("dark-mode");
    else body.classList.remove("dark-mode");
  }

  _handleBurgerClick() {
    let x = document.getElementById("myTopnav");
    console.log("&&&&&", x);
  }
}
