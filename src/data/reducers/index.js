import { combineReducers } from "redux"

import roomsReducer from "./rooms_reducer"
import hotelReducer from "./hotel_reducer"

const rootReducer = combineReducers({
  rooms: roomsReducer,
  hotels: hotelReducer
})

export default rootReducer
