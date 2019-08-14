import { FETCH_HOTEL_DETAIL } from "../actions"

export default (state = [], action) => {
    const { type, payload } = action

    switch (type) {
        case FETCH_HOTEL_DETAIL:
            return payload.data

        default:
            return state
    }
}
