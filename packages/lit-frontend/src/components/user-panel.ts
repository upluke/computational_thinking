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

  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  user = new APIUser();
  render() {
    return html`
 
      <div class="user-panel">
        <div class="user-info">
          <ul>
            <span class="user-name">${this.user.username}</span>
            </br>
            <li><a class="user-link" href="/#">About</a></li>
            <li>
              <a class="user-link" >Profile</a>
            </li>
            <li>
            <button slot="logout" @click=${this._signOut}>
            Log out...
          </button>
            </li>
            <li>
            
        </li>
          </ul>
        </div>
      </div>
    `;
  }
  _signOut() {
    console.log("Signout");
    this.user.signOut();
  }
}
