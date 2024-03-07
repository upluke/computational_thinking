import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
//import styleCSS from "../../styles/style.css?inline";

//import "./toggle-switch";

@customElement("home-page")
export class HomePageElement extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="../../styles/reset.css" />
      <link rel="stylesheet" href="../../styles/tokens.css" />
      <link rel="stylesheet" href="../../styles/style.css" />
      <main>
        <!-- Hero -->
        <div class="hero">
          <div class="container">
            <h1>Welcome to Computational Thinking!!!</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Adipisci, illum?
            </p>
          </div>
        </div>

        <!-- Contents -->
        <div class="content-container">
          <!-- Content1 -->
          <div class="content">
            <h2>
              <a href="/app/dsalgo-page">Data Structure & Algorithm</a>
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              eaque qui dolor voluptatem et! Illo dolore repellat voluptatibus
              dolorum velit, sit id voluptas et adipisci consectetur fuga
              assumenda odio, commodi nobis nostrum! Nobis soluta eos, illo
              quisquam reiciendis omnis nam fugiat sint distinctio totam!
              Laborum illum iusto dicta ratione fuga!
            </p>
            <a href="/app/dsalgo-page"
              ><button class="button" role="button">Check it out</button></a
            >
          </div>

          <!-- Content2 -->
          <div class="content">
            <h2><a href="../../bigo.html">Big-O Notation</a></h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              eaque qui dolor voluptatem et! Illo dolore repellat voluptatibus
              dolorum velit, sit id voluptas et adipisci consectetur fuga
              assumenda odio, commodi nobis nostrum! Nobis soluta eos, illo
              quisquam reiciendis omnis nam fugiat sint distinctio totam!
              Laborum illum iusto dicta ratione fuga!
            </p>
            <a href="../../bigo.html"
              ><button class="button" role="button">Check it out</button></a
            >
          </div>
        </div>
      </main>
    `;
  }

  static styles = css``;
}
