// src/profiles.ts
import { Document } from "mongoose";
import { PageViewer } from "ts-models";
import PageViewerModel from "./models/mongo/pageViewer";

function index(): Promise<PageViewer[]> {
  return PageViewerModel.find();
}

function get(pageid: String): Promise<PageViewer> {
  return PageViewerModel.find({ pageid })
    .then((list) => list[0])
    .catch((err) => {
      throw `${pageid} Not Found`;
    });
}

function create(page: PageViewer): Promise<PageViewer> {
  const p = new PageViewerModel(page);
  return p.save();
}

export default { index, get, create };
