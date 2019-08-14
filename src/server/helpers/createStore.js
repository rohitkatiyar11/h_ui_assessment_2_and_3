import { createStore, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import axios from "axios"

import rootReducer from "../../data/reducers"
import configs from "../config";

export default req => {
  const axiosInstance = axios.create({
    baseURL: configs.API_URL,
    headers: { cookie: req.get("cookie") || "" }
  })

    const store = createStore(
    rootReducer,
    {},
    applyMiddleware(reduxThunk.withExtraArgument(axiosInstance))
  )

  return store
}
