import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("toggle-switch")
export class ToggleSwitchElement extends LitElement {
  @property({ reflect: true, type: Boolean })
  on: boolean = false;

  render() {
    return html`<label>
      <slot>Label</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`;
  }

  static styles = css`
    :host {
      display: block;
    }
    label {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: var(--size-spacing-medium);
      line-height: 2em;
      cursor: pointer;
      color: var(--primary-color);
      margin-right: 1rem;
    }
    .slider {
      display: inline-block;
      border: 1px solid var(--primary-color);
      border-radius: 0.75em;
      background-color: var(--secondary-color);
      height: 1.5em;
      width: 2.75em;
      position: relative;
      transition: background-color var(--background-color);
    }
    .slider:has(input:checked) {
      background-color: var(--secondary-color);
    }
    input {
      appearance: none;
      cursor: pointer;
      background-color: white;
      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
      font-size: inherit;
      position: absolute;
      left: 0;
      transition: left var(--transition-duration);
    }
    input:checked {
      left: 1em;
    }
  `;

  _handleChange(ev: Event) {
    const target = ev.target as HTMLInputElement;
    const composedEvent = new Event(ev.type, {
      bubbles: true,
      composed: true,
    });

    this.on = target?.checked;
    this.dispatchEvent(composedEvent);
  }
}
