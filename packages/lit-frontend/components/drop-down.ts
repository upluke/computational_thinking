import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Router } from "@vaadin/router";
@customElement("drop-down")
export class DropDownElement extends LitElement {
  @property({ reflect: true, type: Boolean })
  open: boolean = false;

  render() {
    return html`
      <input
        type="checkbox"
        id="is-shown"
        @change=${this._handleChange}
        .checked=${this.open}
      />
      <label for="is-shown"><slot>Menu</slot></label>
      <slot name="menu">
        <ul slot="menu">
          <span class="user-name">Mike</span
          ><br />
          <li><a class="user-link" href="/#">About</a></li>
          <li>
            <a class="user-link" @click=${this.navigateToProfile}>Profile</a>
          </li>
          <a class="sign-out" @click=${this.signOut}>Sign out</a>
        </ul>
      </slot>
    `;
  }

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    #is-shown {
      display: none;
    }

    label {
      cursor: pointer;
    }

    slot[name="menu"] {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      border: 1px solid;
      background: white;
    }

    #is-shown:checked ~ slot[name="menu"] {
      display: block;
    }

    /* CSS for slotted elements and default slot content */

    ::slotted(ul[slot="menu"]),
    slot[name="menu"] > ul {
      margin: 0;
      padding: 0.25em;
      list-style: none;
      white-space: nowrap;
    }
    /* css for user-panel */

    .user-name {
      font-weight: bold;
    }

    .user-link {
      color: var(--hero-background-color);
      text-decoration: none;
      margin-bottom: 8px;
      display: block;
    }

    .sign-out {
      color: green;
      cursor: pointer;
      text-decoration: none;
      margin-top: 16px;
      display: block;
    }
  `;
  _handleChange(ev: InputEvent) {
    const target = ev.target as HTMLInputElement;
    this._toggle(target.checked);
  }
  _toggle(open: boolean) {
    this.open = open;
    this._toggleClickAway(open);
  }

  _toggleClickAway(open: boolean) {
    const clickawayHandler = (ev: Event) => {
      if (!ev.composedPath().includes(this)) {
        this._toggle(false);
      } else {
        ev.stopPropagation();
      }
    };

    if (open) {
      document.addEventListener("click", clickawayHandler);
    } else {
      document.removeEventListener("click", clickawayHandler);
    }
  }
  signOut() {
    console.log("Signing out...");
  }
  navigateToProfile() {
    Router.go("/user-profile");
  }
}
