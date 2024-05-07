import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../components/dsalgo-sidebar";
import "../components/page-viewer";
import * as App from "../app";

type DsalgoLocation = Location & {
  params: { algo: string };
  searchParams: Map<string, string>;
};

@customElement("dsalgo-page")
//export class DsalgoPage extends LitElement {
export class DsalgoPage extends App.View {
  @property({ attribute: false })
  location?: DsalgoLocation;

  @property({ reflect: true })
  get algo() {
    return this.location?.params.algo;
  }

  render() {
    return html` <div id="dsalgo-container">
      <dsalgo-sidebar-component class="child1"></dsalgo-sidebar-component>

      <page-viewer class="child2" page-id="${this.algo}"></page-viewer>
    </div>`;
  }

  static styles = css`
    #dsalgo-container {
      display: flex;
      /* height: 100%; */
    }
    .child1 {
      flex-basis: 25%;
      /* height: 100%; */
    }

    .child2 {
      flex-basis: 75%;
      /* height: 100%; */
    }

    @media (max-width: 768px) {
      #dsalgo-container {
        display: block;
      }
    }
  `;
}
