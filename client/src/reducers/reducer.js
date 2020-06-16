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

    return state;
}
