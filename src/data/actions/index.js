import "babel-polyfill"

export const FETCH_ROOMS = "fetch_rooms"

export const fetchRooms = () => async (dispatch, getState, api) => {
  const response = await api.get("/rooms")

  dispatch({
    type: FETCH_ROOMS,
    payload: response
  })
}

export const FETCH_HOTEL_DETAIL = "fetch_hotel_detail"

export const fetchHotelDetail = () => async (dispatch, getState, api) => {
  const response = await api.get("/hotels")

  dispatch({
    type: FETCH_HOTEL_DETAIL,
    payload: response
  })
}