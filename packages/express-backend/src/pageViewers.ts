// src/profiles.ts
import { Document } from "mongoose";
import { PageViewer } from "ts-models";
import PageViewerModel from "./mongo/pageViewer";

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

function update(pageid: String, page: PageViewer): Promise<PageViewer> {
  return new Promise((resolve, reject) => {
    PageViewerModel.findOneAndUpdate({ pageid }, page, {
      new: true,
    }).then((page) => {
      if (page) resolve(page);
      else reject("Failed to update page");
    });
  });
}

export default { index, get, create, update };
