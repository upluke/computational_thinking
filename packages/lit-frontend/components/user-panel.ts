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
          <img
            class="user-avatar"
            src="https://www.svgrepo.com/show/382112/female-avatar-girl-face-woman-user-8.svg"
            alt="User Avatar"
          />
        </div>
      </div>
    `;
  }
}
