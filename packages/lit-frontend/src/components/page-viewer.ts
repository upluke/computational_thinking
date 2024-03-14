import { css, html, LitElement } from "lit";
import { consume } from "@lit/context";
import { authContext } from "./auth-required";
import { APIUser, APIRequest } from "../rest";
import { customElement, property, state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { PageViewer } from "ts-models";
import { serverPath } from "../rest";
@customElement("page-viewer")
export class PageViewerElement extends LitElement {
  @property({ attribute: "page-id" })
  pageId: string = "";

  @property({ attribute: "is-editing" })
  isEditing: boolean = false;

  @state()
  page: PageViewer = { pageid: this.pageId, content: "<h1>My page</h1>" };

  firstUpdated() {
    this._fetchPageContent();
  }
  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  user = new APIUser();

  render() {
    return html`
      <div id="page-viewer-container">
        ${this.user.username === "okguy"
          ? html`
              <button @click=${this._handleEditClick}>
                ${this.isEditing ? "Cancel" : "Edit"}
              </button>
            `
          : ""}
        ${unsafeHTML(this.page.content)}
        ${this.user.username === "okguy" && this.isEditing
          ? this._renderEditForm()
          : ""}
      </div>
    `;
  }

  static styles = css`
    #page-viewer-container {
      padding-top: 30px;
      background-color: orange;

      width: 100%;
      height: 100vh;
    }
  `;

  _fetchPageContent() {
    fetch(serverPath(`/pages/${this.pageId}`))
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
      })
      .then((json) => {
        if (json) {
          this.page = json as PageViewer;
        }
      })
      .catch((error) => {
        console.log("front end error: ", error);
      });
  }
  _handleEditClick() {
    this.isEditing = !this.isEditing;
  }
  _renderEditForm() {
    return html`
      <form @submit=${this._handleEditSubmit}>
        <textarea name="content">${this.page.content}</textarea>
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

    fetch(serverPath(`/pages/${this.pageId}`), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    })
      .then((response) => {
        if (response.ok) {
          this.isEditing = false;
          return response.json();
        }
      })
      .then((json: unknown) => {
        if (json) this.page = json as PageViewer;
      })
      .catch((error) => {
        console.error(`Error updating page content: ${error}`);
      });
  }
}
