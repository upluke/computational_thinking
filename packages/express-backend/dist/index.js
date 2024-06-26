"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_express = __toESM(require("express"));
var import_cors = __toESM(require("cors"));
var import_mongoConnect = require("./mongoConnect");
var import_profiles = __toESM(require("./services/profiles"));
var import_auth = require("./auth");
var path = __toESM(require("path"));
var import_pageViewers = __toESM(require("./services/pageViewers"));
var import_promises = __toESM(require("node:fs/promises"));
const indexHtml = require.resolve("lit-frontend");
const dist = path.dirname(indexHtml);
const app = (0, import_express.default)();
const port = process.env.PORT || 3e3;
app.use((0, import_cors.default)());
app.use(import_express.default.json());
(0, import_mongoConnect.connect)("comp-thinking");
app.use(import_express.default.static(dist));
app.use("/app", (req, res) => {
  import_promises.default.readFile(indexHtml, { encoding: "utf8" }).then((html) => res.send(html));
});
app.post("/login", import_auth.loginUser);
app.post("/signup", import_auth.registerUser);
app.get("/api/profiles/:userid", (req, res) => {
  const { userid } = req.params;
  import_profiles.default.get(userid).then((profile) => res.json(profile)).catch((err) => res.status(404).end());
});
app.post("/api/profiles", (req, res) => {
  const newProfile = req.body;
  import_profiles.default.create(newProfile).then((profile) => res.status(201).send(profile)).catch((err) => res.status(500).send(err));
});
app.put("/api/profiles/:userid", (req, res) => {
  const { userid } = req.params;
  const newProfile = req.body;
  import_profiles.default.update(userid, newProfile).then((profile) => res.json(profile)).catch((err) => res.status(404).end());
});
app.get("/api/pages/:pageid", (req, res) => {
  const { pageid } = req.params;
  import_pageViewers.default.get(pageid).then((pageViewer) => res.json(pageViewer)).catch((err) => res.status(404).end());
});
app.post("/api/pages", (req, res) => {
  const newPage = req.body;
  import_pageViewers.default.create(newPage).then((page) => res.status(201).send(page)).catch((err) => res.status(500).send(err));
});
app.put("/api/pages/:pageid", (req, res) => {
  const { pageid } = req.params;
  const newPage = req.body;
  import_pageViewers.default.update(pageid, newPage).then((pageViewer) => res.json(pageViewer)).catch((err) => res.status(404).end(err));
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
