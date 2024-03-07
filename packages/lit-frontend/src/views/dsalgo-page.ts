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
    return html` <meta charset="UTF-8" />

      <div>
        <sidebar-component></sidebar-component>
        <page-viewer page-id="${this.algo}"></page-viewer>
      </div>`;
  }

  static styles = css``;
}
