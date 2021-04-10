import axios from 'axios';
import { SEARCH } from './ituneType';

export const fetchSongReq = () => {
    return {
        type: SEARCH.FETCH_SONG_REQUEST
    }
}

export const fetchSongSuccess = songList => {
    return {
        type: SEARCH.FETCH_SONG_SUCCESS,
        payload: songList
    }
}

export const fetchSongFailure = error => {
    return {
        type: SEARCH.FETCH_SONG_FAILURE,
        payload: error
    }
}

export const fetchList = (searchTerm) => {
    return (dispatch) => {
        dispatch(fetchSongReq)
        axios.get('https://itunes.apple.com/search?term=' + searchTerm)
            .then(function (response) {
                const list = response.data.results;
                dispatch(fetchSongSuccess(list))
                // console.log(response);
            })
            .catch(function (error) {
                // console.log(error);
                const err = error.message;
                dispatch(fetchSongFailure(err))
            });
    }
}