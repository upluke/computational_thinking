import { LitElement, html, css } from "lit";

class SidebarComponent extends LitElement {
  static styles = css`
    /* side menu */

    .sidebar {
      /* position: fixed; */
      padding-top: 30px;
      top: 0;
      left: 0;
      height: 100vh;

      width: 100%;

      background: var(--primary-color);
      /* z-index: 100; */
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
    .sidebar .logo-details i:hover {
      color: var(--secondary-color);
    }
    .sidebar .logo-details .logo-name {
      color: var(--background-color);
      font-weight: bold;
    }

    .sidebar .logo-details a {
      cursor: pointer;
    }
    .sidebar .nav-links {
      height: 100%;
      padding: 30px 0 150px 0;
      overflow: auto;
    }

    .sidebar .nav-links li {
      position: relative;
      list-style: none;
      transition: all 0.4s ease;
    }
    .sidebar .nav-links li:hover {
      /* background: var(--secondary-color); */
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

    .sidebar .nav-links li .sub-menu,
    .sidebar .nav-links li .arrow {
      display: block !important;
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
      background: #1d1b31;
      display: none;
    }
    .sidebar .nav-links li.showMenu .sub-menu {
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
    }

    /* side page */
    .side-page {
      position: fixed;
      padding-left: 20px;
      top: 0;
      left: 0;
      height: 100%;
      z-index: 100;
      transition: all 0.5s ease;
    }

    #content {
      margin-left: 260px;
      transition: margin 0.5s ease;
    }

    iframe[name="contentFrame"] {
      width: 100%;
      height: 100vh;
      border: none;
    }
  `;

  render() {
    return html`
      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div class="sidebar">
        <!-- <h1>DS&ALGO page</h1>-->

        <div class="logo-details">
          <a href="./index.html"><i class="bx bx-home-alt"></i></a>
          <span class="logo-name">Data Structure & Algorithm</span>
        </div>
        <ul class="nav-links">
          <!-- Arrays  -->
          <li>
            <div class="icon-link">
              <a href="#">
                <i class="bx bx-grid"></i>
                <span class="link_name">Arrays</span>
              </a>
              <!-- <i class="bx bxs-chevron-down arrow"></i> -->
            </div>
            <ul class="sub-menu">
              <li>
                <a href="./static_arrays" class="link_name">Static Arrays</a>
              </li>
              <li>
                <a href="./dynamic_arrays">Dynamic Arrays</a>
              </li>
              <li><a href="#">Stacks</a></li>
            </ul>
          </li>
          <!-- Linked Lists  -->
          <li>
            <div class="icon-link">
              <a href="#">
                <i class="bx bx-git-commit"></i>
                <span class="link_name">Linked Lists</span>
              </a>
              <!-- <i class="bx bxs-chevron-down arrow"></i> -->
            </div>
            <ul class="sub-menu">
              <li><a href="#" class="link_name">Singly Linked Lists</a></li>
              <li><a href="#">Doubly Linked Lists</a></li>
              <li><a href="#">Queues</a></li>
            </ul>
          </li>
          <!-- Graphs  -->
          <li>
            <div class="icon-link">
              <a href="#">
                <i class="bx bx-reset"></i>
                <span class="link_name">Graphs</span>
              </a>
              <i class="arrow"></i>
            </div>
            <ul class="sub-menu">
              <li><a href="#" class="link_name">Dijkstra's</a></li>
              <li><a href="#" class="link_name">Prim's</a></li>
              <li><a href="#" class="link_name">Kruskal's</a></li>
            </ul>
          </li>

          <!-- Recursiion  -->
          <li>
            <div class="icon-link">
              <a href="#">
                <i class="bx bx-reset"></i>
                <span class="link_name">Recursion</span>
              </a>
              <i class="arrow"></i>
            </div>
            <ul class="sub-menu">
              <li><a href="#" class="link_name">Direct Recursion</a></li>
              <li><a href="#">Indirect Recursion</a></li>
            </ul>
          </li>

          <!-- DP  -->
          <li>
            <div class="icon-link">
              <a href="#">
                <i class="bx bx-reset"></i>
                <span class="link_name">Dynamic Programming</span>
              </a>
              <i class="arrow"></i>
            </div>
            <ul class="sub-menu">
              <li><a href="#" class="link_name">0/1 Knapsack</a></li>
              <li><a href="#">LCS</a></li>
              <li><a href="#">Unbounded Knapsack</a></li>
            </ul>
          </li>
        </ul>
      </div>
    `;
  }
}

customElements.define("sidebar-component", SidebarComponent);
