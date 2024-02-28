import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

@customElement("page-viewer")
export class PageViewerElement extends LitElement {
  @property()
  pageId: String = "";
  isAdmin: Boolean = false;
  pageContent: String = "<h1>My page</h1>";
  isEditing: Boolean = false;

  @state()
  model: PageModel;

  firstUpdated() {
    this._fetchPageContent();
  }


  render() {
    return html`
    <div>
    ${this.isAdmin ? html`
      <button @click=${this._handleEditClick}>${this.isEditing ? 'Cancel' : 'Edit'}</button>
    ` : ''}
      
    unsafeHTML(this.pageContent)
       
    ${this.isAdmin && this.isEditing ? this._renderEditForm() : ''}
  </div>
    `;
  }

  static styles = css`
     // css
    
  `;

  
   async _fetchPageContent() {
    const response = await fetch(`/api/pages/${this.pageId}`);
    const data = await response.json();
    this.pageContent = data.content;
  }
  _handleEditClick() {
    this.isEditing = !this.isEditing;
  }
  _renderEditForm() {
    return html`
      <form @submit=${this._handleEditSubmit}>
        <textarea name="content">${this.pageContent}</textarea>
        <button type="submit">Save</button>
      </form>
    `;
  }
  async _handleEditSubmit(event: { preventDefault: () => void; target: HTMLFormElement | undefined; }) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const content = formData.get('content');

    const response = await fetch(`/api/pages/${this.pageId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });

    if (response.ok) {
      this.isEditing = false;
      this.pageContent = content;
    } else {
      const errorMessage = await response.text();
    console.error(`Error updating page content: ${errorMessage}`);
 
    //this.shadowRoot.querySelector('.error-message').textContent = errorMessage;
    }
  }
     
  }
}
