import { Router } from "@vaadin/router";
import { customElement, property } from "lit/decorators.js";
import { html, css, LitElement } from "lit";

@customElement("user-panel")
export class UserPanel extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .user-panel {
      background-color: var(--background-color);
      padding: 16px;
      border-radius: 8px;
    }

    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 12px;
    }

    .user-info {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
    }

    .user-name {
      font-weight: bold;
    }

    .user-link {
      color: var(--hero-background-color);
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
  `;

  render() {
    return html`
      <div class="user-panel">
        <div class="user-info">
          <img
            class="user-avatar"
            src="https://www.svgrepo.com/show/382112/female-avatar-girl-face-woman-user-8.svg"
            alt="User Avatar"
          />
          <div>
            <span class="user-name">Mike</span><br />
            <a class="user-link" href="/#">About</a>
            <a class="user-link" @click=${this.navigateToProfile}>Profile</a>
          </div>
        </div>
        <a class="sign-out" @click=${this.signOut}>Sign out</a>
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
