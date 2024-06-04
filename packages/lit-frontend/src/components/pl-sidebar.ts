import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("pl-sidebar-component")
export class PLSidebarComponent extends LitElement {
  @property({ attribute: "page-id" })
  pageId: string = "";

  @state()
  isMenuOpen: boolean = false;

  @state()
  subMenuOpen: string = "";

  toggleMenu() {
    console.log("pl click!!!!");
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSubMenu(event: Event, s: string) {
    event.stopPropagation();
    event.preventDefault();

    this.subMenuOpen = this.subMenuOpen === s ? "" : s;
    // if (this.isMenuOpen && this.subMenuOpen === s) {
    //   this.isMenuOpen = false;
    // }
  }

  attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null
  ): void {
    if (name === "page-id" && _old !== value && value !== null) {
      const [prefix] = value.split("_");
      this.subMenuOpen = prefix;
      this.isMenuOpen = true;
    }
  }

  render() {
    return html`
      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div class="sidebar">
        <div class="logo-details">
          <a href="/app"><i class="bx bx-home-alt"></i></a>
          <span class="logo-name">Programming Languages </span>
        </div>
        <ul class="nav-links ${this.isMenuOpen ? "showMenu" : "hideMenu"}">
          <!-- Python -->
          <li>
            <div class="icon-link">
              <a @click="${(e: Event) => this.toggleSubMenu(e, "python")}">
                <i class="bx bx-grid"></i>
                <span class="link_name">Python</span>
              </a>
              <i
                class="bx bxs-chevron-down arrow"
                @click="${(e: Event) => this.toggleSubMenu(e, "python")}"
              ></i>
            </div>
            <ul
              class="sub-menu ${this.subMenuOpen === "python"
                ? "showSubMenu"
                : "hideSubMenu"}"
            >
              <li>
                <a href="./python_syntax">Syntax</a>
              </li>
              <li>
                <a href="./python_quick_hacks">Quick Hacks</a>
              </li>
            </ul>
          </li>

          <!-- Java  -->

          <li>
            <div class="icon-link">
              <a
                href="#"
                @click="${(e: Event) => this.toggleSubMenu(e, "java")}"
              >
                <i class="bx bx-grid"></i>
                <span class="link_name">Java</span>
              </a>
              <i
                class="bx bxs-chevron-down arrow"
                @click="${(e: Event) => this.toggleSubMenu(e, "java")}"
              ></i>
            </div>
            <ul
              class="sub-menu ${this.subMenuOpen === "java"
                ? "showSubMenu"
                : "hideSubMenu"}"
            >
              <li>
                <a href="./java_syntax">Syntax</a>
              </li>
              <li>
                <a href="./java_quick_hacks">Quick Hacks</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    `;
  }

  static styles = css`
    * {
      box-sizing: border-box;
    }
    .sidebar {
      padding-top: 30px;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: var(--primary-color);
      transition: all 0.5s ease;
    }

    .sidebar .logo-details {
      height: 60px;
      width: 100%;
      display: flex;
      align-items: center;
    }

    .sidebar .logo-details i {
      font-size: 30px;
      color: var(--background-color);
      height: 50px;
      min-width: 78px;
      text-align: center;
      line-height: 50px;
    }

    .sidebar .logo-details .logo-name {
      color: var(--background-color);
      font-weight: bold;
      cursor: pointer;
    }

    .sidebar .nav-links {
      height: 100%;
      overflow: auto;
    }

    .sidebar .nav-links li {
      position: relative;
      list-style: none;
      transition: all 0.4s ease;
    }

    .sidebar .nav-links li .icon-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .sidebar .nav-links li i {
      height: 50px;
      min-width: 78px;
      text-align: center;
      line-height: 50px;
      color: var(--background-color);
      font-size: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .sidebar .nav-links li a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .sidebar .nav-links li a .link_name {
      font-size: 18px;
      font-weight: 400;
      color: var(--background-color);
      transition: all 0.4s ease;
    }

    .sidebar .nav-links li .sub-menu {
      padding: 6px 6px 14px 80px;
      margin-top: -10px;
      display: none;
    }

    .sidebar .nav-links li .sub-menu.showSubMenu {
      display: block;
    }

    .sidebar .nav-links li .sub-menu a {
      color: var(--background-color);
      font-size: 15px;
      padding: 5px 0;
      white-space: nowrap;
      opacity: 0.6;
      transition: all 0.3s ease;
    }

    .sidebar .nav-links li .sub-menu a:hover {
      opacity: 1;
      color: var(--side-bar-hover-fond-color);
    }

    @media (max-width: 768px) {
      .sidebar .nav-links.hideMenu {
        display: none;
      }
    }
  `;
}
