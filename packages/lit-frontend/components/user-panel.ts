import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("user-panel")
export class UserPanel extends LitElement {
  @property({ attribute: "name", type: String })
  name: String = "Somebody";

  static styles = css`
    p {
      color: blue;
    }
  `;

  render() {
    return html` <p>Hello, ${this.name}!</p> `;
  }
}
