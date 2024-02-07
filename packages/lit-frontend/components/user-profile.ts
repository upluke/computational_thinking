import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("user-profile")
export class UserPanel extends LitElement {
  @property({ attribute: "name", type: String })
  name: String = "Somebody";

  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <div>
        <h1>User profile</h1>
        <p>THis is the user profile page</p>
      </div>
    `;
  }
}
