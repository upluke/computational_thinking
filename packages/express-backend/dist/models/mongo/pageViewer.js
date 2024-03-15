"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var pageViewer_exports = {};
__export(pageViewer_exports, {
  default: () => pageViewer_default
});
module.exports = __toCommonJS(pageViewer_exports);
var import_mongoose = require("mongoose");
const pageViewerSchema = new import_mongoose.Schema(
  {
    pageid: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true }
  }
  //{ collection: "user_profiles" }
);
const PageViewerModel = (0, import_mongoose.model)("PageViewer", pageViewerSchema);
var pageViewer_default = PageViewerModel;
