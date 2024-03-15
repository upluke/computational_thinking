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
        ${this.user.username === "admin"
          ? html`
              <button @click=${this._handleEditClick}>
                ${this.isEditing ? "Cancel" : "Edit"}
              </button>
            `
          : ""}
        ${unsafeHTML(this.page.content)}
        ${this.user.username === "admin" && this.isEditing
          ? this._renderEditForm()
          : ""}
      </div>
    `;
  }

  static styles = css`
    #page-viewer-container {
      background-color: var(--hero-text-color);
      padding: 3rem 5rem;
      width: 100%;
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
        <textarea class="textarea" name="content">
${this.page.content}</textarea
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
