import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

import "./nav-bar";

import resetCSS from "../../src/styles/reset.css?inline";

@customElement("ct-header")
export class BlazingHeaderElement extends LitElement {
  render() {
    return html`
      <header>
        <nav-bar>Profile-a </nav-bar>
      </header>
    `;
  }

  static styles = [
    unsafeCSS(resetCSS),
    css`
      header {
        /* background-color: var(--background-color); */

        font-family: "Bebas Neue", sans-serif;

        height: 60px;

        padding-top: 10px;

        z-index: 1;
        display: flex;

        align-items: center;
      }
    `,
  ];
}
