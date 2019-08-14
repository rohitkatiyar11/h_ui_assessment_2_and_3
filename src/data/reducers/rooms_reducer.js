import { FETCH_ROOMS } from "../actions"

export default (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_ROOMS:
      return payload.data

    default:
      return state
  }
}
