// import { css, html, LitElement } from "lit";
// import { customElement, property } from "lit/decorators.js";

// type DsalgoLocation = Location & {
//   params: { algo: string };
//   searchParams: Map<string, string>;
// };

// @customElement("bigo-page")
// export class BigoPage extends LitElement {
//   @property({ attribute: false })
//   location?: DsalgoLocation;

//   render() {
//     return html` <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <link rel="stylesheet" href="/styles/reset.css" />
//       <link rel="stylesheet" href="/styles/tokens.css" />
//       <link rel="stylesheet" href="/styles/style.css" />
//       <title>Big-O</title>
//       <div>
//         <h1>Here's the big O page</h1>
//         <a href="index.html"> Click Here to Go Back Home </a>
//       </div>`;
//   }

//   static styles = css``;
// }
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../components/bigo-sidebar";
import "../components/page-viewer";

type BigoLocation = Location & {
  params: { bigo: string };
  searchParams: Map<string, string>;
};

@customElement("bigo-page")
export class BigoPage extends LitElement {
  @property({ attribute: false })
  location?: BigoLocation;

  @property({ reflect: true })
  get bigo() {
    return this.location?.params.bigo;
  }

  render() {
    return html` <div id="bigo-container">
      <bigo-sidebar-component class="child1"></bigo-sidebar-component>

      <page-viewer class="child2" page-id="${this.bigo}"></page-viewer>
    </div>`;
  }

  static styles = css`
    #bigo-container {
      display: flex;
      /* margin-top: 5px; */
    }
    .child1 {
      width: 25%;
    }

    .child2 {
      width: 75%;
    }
  `;
}
