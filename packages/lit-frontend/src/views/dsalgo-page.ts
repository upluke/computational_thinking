import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../components/sidebar";
import "../components/page-viewer";

type DsalgoLocation = Location & {
  params: { algo: string };
  searchParams: Map<string, string>;
};

@customElement("dsalgo-page")
export class DsalgoPage extends LitElement {
  @property({ attribute: false })
  location?: DsalgoLocation;

  @property({ reflect: true })
  get algo() {
    return this.location?.params.algo;
  }

  render() {
    return html` <div id="dsalgo-container">
      <sidebar-component class="child1"></sidebar-component>

      <page-viewer class="child2" page-id="${this.algo}"></page-viewer>
    </div>`;
  }

  static styles = css`
    #dsalgo-container {
      display: flex;
      /* margin-top: 5px; */
    }
    .child1 {
      width: 30%;
    }

    .child2 {
      width: 70%;
    }
  `;
}
