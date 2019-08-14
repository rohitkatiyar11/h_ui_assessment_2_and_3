import express from "express"
import { matchRoutes } from "react-router-config"
import proxy from "express-http-proxy"

import renderer from "./helpers/renderer"
import createStore from "./helpers/createStore"
import Routes from "../Routes"
import configs from "./config";

const app = express();

app.use(
  "/api",
  proxy(configs.API_URL, {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000"
      return opts
    }
  })
)
app.use(express.static("public"))

app.get("*", (req, res) => {
  const store = createStore(req)

  const promises = matchRoutes(Routes, req.path)
    .map(({ route: { loadData } }) => (loadData ? loadData(store) : null))
    .map(
      promise =>
        promise &&
        new Promise(res => {
          promise.then(res).catch(res)
        })
    )

  Promise.all(promises).then(() => {
    const context = {},
      content = renderer(req, store, context)

    if (context.url) return res.redirect(302, context.url)

    res.send(content)
  })
})

app.listen(3000, () => {
  console.log("Express app running on port: 3000")
})
