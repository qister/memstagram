import { createStore } from 'redux';
import axios from 'axios'

// const initialState = []

// export const store = createStore(reducer, initialState);

export default function reducer(state, action) {

    if (action.type === "ADD_MEME") {

        return [...state, action.payload]
    }
    if (action.type === "DELETE_ID") {
        return state.filter(meme => meme.id !== action.payload)
    }
    if (action.type === "LIKE_ID") {
        
        return state.map(meme => meme.id === action.payload ? {...meme, liked: !meme.liked}: meme)
    }
    if (action.type = 'LOAD_INITIAL_MEMES') {  
        if (action.payload) {
            return action.payload
        } else {
            return state
        }  
        // return state
    }

    return state;
}
