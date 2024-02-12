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

      /* padding: 16px; */
      /* border-radius: 8px; */
    }

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

  render() {
    return html`
      <div class="user-panel">
        <div class="user-info">
          <ul>
            <span class="user-name">Mike</span
            ><br />
            <li><a class="user-link" href="/#">About</a></li>
            <li>
              <a class="user-link" @click=${this.navigateToProfile}>Profile</a>
            </li>
            <a class="sign-out" @click=${this.signOut}>Sign out</a>
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
