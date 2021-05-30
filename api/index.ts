// A simple reverse proxy forwarding traffic from https://your-website.com/proxy-path/*
// to https://dataunlocker-key.ddns.your-website.com/*, adding additional `x-du-ip` header.
// This script uses environment variables

import express from "express";
import proxy from "express-http-proxy";
import { readFileSync } from "fs";

const publicDir = "api/public";
const scriptsDir = "api/scripts";

// Reading environment variables passed by Vercel. These are all provided by DataUnlocker.
// PATH_PREFIX - a path prefix at the current domain to use for everything which is proxied.
// DATAUNLOCKER_HOST - a proxy domain address (DataUnlocker's endpoint).
// DATAUNLOCKER_SCRIPT_NAME - a name of the DataUnlocker script which will be served (from "scripts" directory).
const PATH_PREFIX =
  "/" + (process.env.PATH_PREFIX || "no-path-prefix").replace(/.*\//, "");
const DATAUNLOCKER_HOST = (
  process.env.DATAUNLOCKER_HOST || "undefined"
).replace(/^(?:https?:\/\/)?/, "https://");
const DATAUNLOCKER_SCRIPT_NAME =
  process.env.DATAUNLOCKER_SCRIPT_NAME || "production";

// Served files (as we replace some things it needs to be dynamic).
const servedJsFileName = `scripts/${DATAUNLOCKER_SCRIPT_NAME}.js`;
console.log(`Reading served HTML file ${servedJsFileName}`);
const servedJs = readFileSync(
  `${scriptsDir}/${DATAUNLOCKER_SCRIPT_NAME}.js`
).toString("utf8");
const servedFavicon = readFileSync(`${publicDir}/favicon.ico`);
const servedHtml = readFileSync(`${publicDir}/index.html`)
  .toString("utf8")
  .replace("/*DATAUNLOCKER_SCRIPT_NAME*/", () => servedJs);

console.log(
  `Proxy has been configured for ${DATAUNLOCKER_HOST} with path prefix ${PATH_PREFIX}.`
);

// The proxy application logic.
const app = express();
app.set("trust proxy", true); // Required because Vercel (vercel.com) works behind the proxy itself.
app.use(
  PATH_PREFIX,
  proxy(`${DATAUNLOCKER_HOST}`, {
    memoizeHost: true,
    proxyReqOptDecorator: (proxyRequest, req) => {
      proxyRequest.headers["x-du-ip"] = req.ip;
      console.log(
        `${proxyRequest.path} -> ${DATAUNLOCKER_HOST}${proxyRequest.path}`
      );
      return proxyRequest;
    },
  })
);

// Static serving.
app.get("/favicon.ico", (_, res) => {
  res.setHeader("Content-Type", "image/x-icon");
  res.send(servedFavicon);
});
app.get("/", (_, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(servedHtml);
});

export default app;
