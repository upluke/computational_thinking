import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../components/pl-sidebar";
import "../components/page-viewer";
import * as App from "../app";

type PlLocation = Location & {
  params: { pl: string };
  searchParams: Map<string, string>;
};

@customElement("pl-page")
//export class DsalgoPage extends LitElement {
export class PlPage extends App.View {
  @property({ attribute: false })
  location?: PlLocation;

  @property({ reflect: true })
  get pl() {
    return this.location?.params.pl;
  }

  render() {
    return html` <div id="dsalgo-container">
      <pl-sidebar-component class="child1"></pl-sidebar-component>

      <page-viewer class="child2" page-id="${this.pl}"></page-viewer>
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
