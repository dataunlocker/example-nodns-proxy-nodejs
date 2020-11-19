import express from "express";
import proxy from "express-http-proxy";
import serveStatic from "serve-static";

// Reading environment variables passed by Vercel. These are all provided by DataUnlocker.
// X_DU_TOKEN - the token header for authorization purposes.
// PATH_PREFIX - a path prefix at the current domain to use for everything which is proxied.
// DATAUNLOCKER_HOST - a proxy domain address (DataUnlocker's endpoint).
const X_DU_TOKEN = process.env.X_DU_TOKEN;
const PATH_PREFIX = "/" + (process.env.PATH_PREFIX || "").replace(/.*\//, "");
const DATAUNLOCKER_HOST = (
  process.env.DATAUNLOCKER_HOST || "undefined"
).replace(/^(?:https?:\/\/)?/, "https://");

// Everything below - the proxy application logic.
console.log(
  `Proxy configured for ${DATAUNLOCKER_HOST} with path prefix ${PATH_PREFIX}. Token was ${
    X_DU_TOKEN ? "" : "NOT "
  }set.`
);

const app = express();
app.set("trust proxy", true); // Because Vercel (vercel.com) works behind the proxy itself.
app.use(
  PATH_PREFIX,
  proxy(`${DATAUNLOCKER_HOST}`, {
    memoizeHost: true,
    proxyReqOptDecorator: (proxyRequest, req) => {
      proxyRequest.headers["X-Du-Token"] = X_DU_TOKEN;
      proxyRequest.headers["X-Du-IP"] = req.ip;
      console.log(
        `${proxyRequest.path} -> ${DATAUNLOCKER_HOST}${proxyRequest.path}`
      );
      return proxyRequest;
    },
  })
);
app.use(serveStatic("public", { index: ["index.html"] }));

export default app;
