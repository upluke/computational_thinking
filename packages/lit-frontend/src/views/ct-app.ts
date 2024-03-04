import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
// MVU app
//import * as App from "../app";
import routes from "../routes";
//import update from "../update";
// components
import "../components/auth-required";
import "../components/vaadin-router";

@customElement("ct-app")
export class CTAppElement extends LitElement {
  constructor() {
    //super(update);
    super();
  }

  render() {
    return html`
      <auth-required>
        <header>
          <nav-bar>Profile-a </nav-bar>
        </header>
        <vaadin-router .routes=${routes}> </vaadin-router>
      </auth-required>
    `;
  }
}
