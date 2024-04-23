// src/index.ts
import express, { Request, Response } from "express";
import cors from "cors";
import { connect } from "./mongoConnect";
import profiles from "./services/profiles";
import { Profile } from "ts-models";
import { loginUser, registerUser } from "./auth";
import { PageViewer } from "ts-models";
import * as path from "path";
import pageViewers from "./services/pageViewers";
import fs from "node:fs/promises";
const indexHtml = require.resolve("lit-frontend");
const dist = path.dirname(indexHtml);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
connect("comp-thinking");

//>>>>>>>>>>>>>>>>>>>>>>>>>>

// static assets: /styles, /images, /icons, etc.
app.use(express.static(dist));

// SPA routes: /app/...
app.use("/app", (req, res) => {
  fs.readFile(indexHtml, { encoding: "utf8" }).then((html) => res.send(html));
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>
app.post("/login", loginUser);
app.post("/signup", registerUser);
// profile ---------------------------
app.get("/api/profiles/:userid", (req: Request, res: Response) => {
  //res.send("Hello, World");
  const { userid } = req.params;

  profiles
    .get(userid)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

app.post("/api/profiles", (req: Request, res: Response) => {
  const newProfile = req.body;

  profiles
    .create(newProfile)
    .then((profile: Profile) => res.status(201).send(profile))
    .catch((err) => res.status(500).send(err));
});

app.put("/api/profiles/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
  const newProfile = req.body;

  profiles
    .update(userid, newProfile)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

// page-viewer --------------------------
app.get("/api/pages/:pageid", (req: Request, res: Response) => {
  const { pageid } = req.params;

  pageViewers
    .get(pageid)
    .then((pageViewer: PageViewer) => res.json(pageViewer))
    .catch((err) => res.status(404).end());
});

//

app.post("/api/pages", (req: Request, res: Response) => {
  const newPage = req.body;

  pageViewers
    .create(newPage)
    .then((page: PageViewer) => res.status(201).send(page))
    .catch((err) => res.status(500).send(err));
});

app.put("/api/pages/:pageid", (req: Request, res: Response) => {
  const { pageid } = req.params;
  const newPage = req.body;
  pageViewers
    .update(pageid, newPage)
    .then((pageViewer: PageViewer) => res.json(pageViewer))
    .catch((err) => res.status(404).end(err));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
