import {
    LOAD_MEME_START,
    LOAD_MEME_OK,
    LOAD_MEME_FAIL
} from '../Actions/loadMemesActions'

const initialState = {
    isLoading: false,
    isLoaded: false,
    data: [],
    error: ''
}

export default function memeListReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_MEME_START:
            return {...state, isLoading: true};

        case LOAD_MEME_OK:
            return {...state, isLoading: false, isLoaded: true, data: action.payload}
        
        case LOAD_MEME_FAIL:
            return {
                ...state,
                isLoaded: false,
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}