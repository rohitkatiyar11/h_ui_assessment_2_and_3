import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { renderRoutes } from "react-router-config"
import serialize from "serialize-javascript"

import Routes from "../../Routes"

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  )


  return `
      <html>
        <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
          <link href="/style.css" rel="stylesheet">
          <link href="/dynamic-form.css" rel="stylesheet">
          <link href="/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
          <div id="root">${content}</div>
        </body>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </html>
    `
}
