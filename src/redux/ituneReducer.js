import { SEARCH } from './ituneType'

const initialState = {
    loading: false,
    songList: [],
    error: ""
}

const ituneReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH.FETCH_SONG_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SEARCH.FETCH_SONG_SUCCESS:
            return {
                loading: false,
                songList: action.payload,
                error: ''
            }
        case SEARCH.FETCH_SONG_FAILURE:
            return {
                loading: false,
                songList: [],
                error: action.payload
            }
        default: return state
    }
}

export default ituneReducer