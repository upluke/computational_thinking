import { customElement, property } from "lit/decorators.js";

import { html, css, LitElement } from "lit";
import { Router } from "@vaadin/router";
@customElement("user-panel")
export class UserPanel extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .user-panel {
      background-color: var(--background-color);

      padding-right: 30px;
    }

    .user-name {
      font-weight: bold;
    }

    .user-link {
      color: var(--primary-color);
      text-decoration: none;
      margin-bottom: 8px;

      display: block;
    }

    .sign-out {
      color: green;
      cursor: pointer;
      text-decoration: none;
      margin-top: 16px;
      display: block;
    }
    ul {
      list-style-type: none;
    }
  `;

  render() {
    return html`
      <div class="user-panel">
        <div class="user-info">
          <ul>
            <span class="user-name">Mike</span>
            </br>
            <li><a class="user-link" href="/#">About</a></li>
            <li>
              <a class="user-link" @click=${this.navigateToProfile}>Profile</a>
            </li>
            <li>
            <a class="sign-out" @click=${this.signOut}>Sign out</a>
            </li>
            <li>
            
        </li>
          </ul>
        </div>
      </div>
    `;
  }
  signOut() {
    console.log("Signing out...");
  }
  navigateToProfile() {
    Router.go("/user-profile");
  }
}
