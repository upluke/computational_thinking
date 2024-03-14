// src/models/mongo/profile.ts
import { Schema, Model, Document, model } from "mongoose";
import { PageViewer } from "ts-models";

const pageViewerSchema = new Schema<PageViewer>(
  {
    pageid: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
  }
  //{ collection: "user_profiles" }
);

const PageViewerModel = model<PageViewer>("PageViewer", pageViewerSchema);

export default PageViewerModel;
