import { customElement, property, state } from "lit/decorators.js";
import { consume } from "@lit/context";
import { html, css, LitElement } from "lit";
import { APIUser, APIRequest } from "../rest";
import { authContext } from "./auth-required";
@customElement("user-panel")
export class UserPanel extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    #user-name {
      color: var(--secondary-color);
    }
    .user-panel {
      padding: 0.5rem;
      margin: 0;
      background-color: var(--background-color);
      border: solid var(--primary-color);
      padding-right: 30px;
      border-radius: var(--border-radius);
    }

    .user-name {
      font-weight: bold;
      color: var(--primary-color);
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
    .button {
      background-color: var(--primary-color);
      border: none;
      color: var(--background-color);

      text-align: center;

      border-radius: var(--border-radius);
      display: inline-block;
    }
    button:hover {
      background-color: var(--secondary-color);
      transition: all var(--transition-duration) ease;
      cursor: pointer;
    }
  `;

  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  user = new APIUser();

  render() {
    return html`
      <ul class="user-panel">
        <li>
          <slot name="avatar"></slot>
          <span id="user-name" class="user-name">${this.user.username}</span>
        </li>
        <slot></slot>
        <li><a class="user-link" href="/#">About</a></li>
        <li>
          <a class="user-link">Profile</a>
        </li>
        ${this.user.username !== "Temp_user"
          ? html`
              <li>
                <button class="button" slot="logout" @click=${this._signOut}>
                  Log Out
                </button>
              </li>
            `
          : html`
              <li>
                <button class="button" slot="login" @click=${this._signIn}>
                  Log In
                </button>
              </li>
            `}
      </ul>
    `;
  }
  _signOut() {
    console.log("Signout");
    this.user.signOut();
  }
  _signIn() {
    console.log("SignIn", this);
    const event = new CustomEvent("secure", {
      bubbles: true,
      composed: true,
      detail: {},
    });
    this.dispatchEvent(event); // sent to tree
  }
}
