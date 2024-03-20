import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";
// MVU app
//import * as App from "../app";
import routes from "../routes";
//import update from "../update";
// components
import "../components/ct-header";
import "../components/auth-required";
import "../components/vaadin-router";
import update from "../update";

@customElement("ct-app")
// export class CTAppElement extends LitElement {
export class CTAppElement extends App.Main {
  constructor() {
    super(update);
    // super();
    this.addEventListener("mvu:message", (ev: Event) => {
      const msg = (ev as CustomEvent).detail;
      console.log("Got message:", msg);
    });
  }

  render() {
    return html`
      <auth-required>
        <ct-header> </ct-header>
        <vaadin-router .routes=${routes}> </vaadin-router>
      </auth-required>
    `;
  }
}
