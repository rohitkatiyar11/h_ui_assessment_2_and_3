import App from "./client/App"
import HomePage from "./client/pages/HomePage"
import DynamicForm from "./client/pages/DynamicForm"

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...DynamicForm,
        path: "/dynamic-form"
      }
    ]
  }
]
