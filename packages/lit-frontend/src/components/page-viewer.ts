import { css, html, LitElement } from "lit";
import { consume } from "@lit/context";
import { authContext } from "./auth-required";
import { APIUser, APIRequest } from "../rest";
import { customElement, property, state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { PageViewer } from "ts-models";
import { serverPath } from "../rest";
import * as App from "../app";

@customElement("page-viewer")
// export class PageViewerElement extends LitElement {
export class PageViewerElement extends App.View {
  @property({ attribute: "page-id" })
  pageId: string = "";

  @property({ attribute: "is-editing" })
  isEditing: boolean = false;

  // @state()
  // page: PageViewer = { pageid: this.pageId, content: "<h1>My page</h1>" };
  @property()
  get page() {
    return this.getFromModel<PageViewer>("page");
  }
  firstUpdated() {
    // this._fetchPageContent();
    this.dispatchMessage({
      type: "PageViewerSelected",
      pageid: this.pageId,
    });
  }
  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  user = new APIUser();

  render() {
    return html`
      <div id="page-viewer-container">
        ${this.user.username === "luke"
          ? html`
              <button @click=${this._handleEditClick}>
                ${this.isEditing ? "Cancel" : "Edit"}
              </button>
            `
          : ""}
        ${unsafeHTML(this.page?.content)}
        ${this.user.username === "luke" && this.isEditing
          ? this._renderEditForm()
          : ""}
      </div>
    `;
  }

  static styles = css`
    #page-viewer-container {
      background-color: var(--hero-text-color);
      /* overflow:auto */
      margin: 0 auto;
      padding: 50px;
      width: 70%;
      height: 100vh;
      color: var(--general-text-color);
    }
    button {
      background-color: var(--primary-color);
      border: none;
      color: var(--background-color);
      margin-top: 10px;
      text-align: center;
      padding: 10px 30px;
      border-radius: var(--border-radius);
      display: inline-block;
      font-size: 16px;
    }
    button:hover {
      background-color: var(--secondary-color);
      transition: all var(--transition-duration) ease;
      cursor: pointer;
    }
    .textarea {
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-family: Arial, sans-serif;
      font-size: 16px;
      color: #333;
      width: 100%;
      min-height: 150px;
      resize: vertical;
      transition: border-color 0.3s ease;
    }

    .textarea:focus {
      outline: none;
      border-color: #66afe9;
    }

    .textarea::placeholder {
      color: #aaa;
    }

    // page content

    .container {
    }
    h1 {
      color: var(--general-text-color);
      text-align: center;
      margin-top: 20px;
    }
    h2 {
      color: #666;
    }
    p {
      color: var(--general-text-color);
    }
    .image-container {
      text-align: center;
      margin-top: 20px;
    }
    .complexity-image {
      max-width: 100%;
      height: auto;
    }
  `;

  // _fetchPageContent() {
  //   fetch(serverPath(`/pages/${this.pageId}`))
  //     .then((response) => {
  //       if (response.status == 200) {
  //         return response.json();
  //       }
  //     })
  //     .then((json) => {
  //       if (json) {
  //         this.page = json as PageViewer;
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("front end error: ", error);
  //     });
  // }
  _handleEditClick() {
    this.isEditing = !this.isEditing;
  }
  _renderEditForm() {
    return html`
      <form @submit=${this._handleEditSubmit}>
        <textarea class="textarea" name="content">
${this.page?.content}</textarea
        >
        <button type="submit">Save</button>
      </form>
    `;
  }
  _handleEditSubmit(event: {
    preventDefault: () => void;
    target: HTMLFormElement | undefined;
  }) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const content = formData.get("content");

    // mvu
    this.dispatchMessage({
      type: "PageViewerSaved",
      content: content?.toString() || "",
      pageid: this.pageId,
    });
    this.isEditing = false;

    // default
    // fetch(serverPath(`/pages/${this.pageId}`), {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ content }),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       this.isEditing = false;
    //       return response.json();
    //     }
    //   })
    //   .then((json: unknown) => {
    //     // if (json) this.page = json as PageViewer;
    //   })
    //   .catch((error) => {
    //     console.error(`Error updating page content: ${error}`);
    //   });
  }
}
