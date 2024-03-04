// src/index.ts
import express, { Request, Response } from "express";
import cors from "cors";
import { connect } from "./mongoConnect";
import profiles from "./profiles";
import { Profile } from "./models/profile";

import { PageViewer } from "ts-models";
import pageViewers from "./pageViewers";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
connect("comp-thinking");

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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
