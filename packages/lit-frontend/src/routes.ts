import "./views/home-page";
//import "./views/profile-page";
import "./views/dsalgo-page";
//import "./views/entourage-page";
import "./views/bigo-page";

import "./views/pl-page";
export default [
  // {
  //   path: "/app/profile/:userid",
  //   component: "profile-page",
  // },
  {
    path: "/app/dsalgo-page/:algo",
    component: "dsalgo-page",
  },
  {
    path: "/app/dsalgo-page",
    redirect: "/app/dsalgo-page/static_arrays",
  },
  {
    path: "/app/dsalgo-page/:algo",
    component: "dsalgo-page",
  },
  {
    path: "/app/bigo-page/:bigo",
    component: "bigo-page",
  },
  {
    path: "/app/bigo-page",
    redirect: "/app/bigo-page/constant",
  },
  {
    path: "/app/pl-page/:pl",
    component: "pl-page",
  },
  {
    path: "/app/pl-page",
    redirect: "/app/pl-page/python_syntax",
  },

  { path: "/app", component: "home-page" },
  { path: "(.*)", redirect: "/app" },
];
