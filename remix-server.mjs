import { createRequestHandler } from "@remix-run/express";
import express from "express";

// notice that the result of `remix build` is "just a module"
import * as build from "./build/server/index.js";

const assetsBuildDirectory = process.argv[2];
const app = express();
app.use(express.static(assetsBuildDirectory || "public"));

// and your app is "just a request handler"
app.all("*", createRequestHandler({ build }));

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});
