import { createStore } from 'redux';
import reducer from './reducers.js';

const initialState = [
    {
      id: 0,
      liked: false,
      author: 'Elon',
    },
    {
      id: 1,
      liked: false,
      author: 'Bill',
    },
    {
      id: 2,
      liked: false,
      author: 'Elon',
    },
    {
      id: 3,
      liked: false,
      author: 'Jack',
    },
    {
      id: 4,
      liked: false,
      author: 'Bill',
    },
]

// function reducer(state, action) {
//     if (action.type === "ADD_MEME") {
//         return [...state, action.payload]
//     }
//     if (action.type === "DELETE_ID") {
//         return state.filter(meme => meme.id !== action.payload)
//     }

//     return state;
// }

export const store = createStore(reducer, initialState);

export const like = (id) => {
  return {
    type: 'LIKE_ID',
    payload: id
  }
};

export function addMeme(meme) {
  return {
    type: 'ADD_MEME',
    payload: meme,
  }
}

// const addMeme = (meme) => {
//   return {
//     type: "ADD_MEME",
//     payload: meme,
//   };
// };

// store.dispatch(addMeme({
//   id: 6,
//   liked: false,
//   author: 'Max',
// }));

// store.dispatch({
//     type: "ADD_MEME",
//     payload: {
//         id: 7,
//         liked: true,
//         author: 'Max',
//     },
// })

// store.dispatch({
//     type: "DELETE_ID",
//     payload: 6,
// })


// console.log(store.getState());