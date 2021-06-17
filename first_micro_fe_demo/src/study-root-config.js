import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });
registerApplication(
  "@single-spa/welcome",
  () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  location=>location.pathname==='/'
);

registerApplication({
  name: "@study/todos",
  app: () => System.import("@study/todos"),
  activeWhen: ["/todos"]
});

// 配置realworld app with vue
registerApplication({
  name: "@study/realworld",
  app: () => System.import("@study/realworld"),
  activeWhen: ["/realworld"]
});

registerApplication({
  name: "@study/covid",
  app: () => System.import("@study/covid"),
  activeWhen: ["/covid"]
});

// registerApplication({
//   name: "@study/navbar",
//   app: () => System.import("@study/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
