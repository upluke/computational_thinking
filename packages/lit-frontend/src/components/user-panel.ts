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
 
      <div class="user-panel">
        <div class="user-info">
          <ul>
            <span id="user-name" class="user-name">${this.user.username}</span>
            </br>
            </br>
           
            <li><a class="user-link" href="/#">About</a></li>
            <li>
              <a class="user-link" >Profile</a>
            </li>
            <li>
            <button class="button" slot="logout" @click=${this._signOut}>
            Log Out
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
