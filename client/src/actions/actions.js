import { createStore } from 'redux';
import reducer from '../reducers/reducer';
import axios from 'axios'


// const initialState = [
//     {
//       id: 0,
//       liked: true,
//       author: 'Elon',
//     },
//     {
//       id: 1,
//       liked: false,
//       author: 'Bill',
//     },
//     {
//       id: 2,
//       liked: false,
//       author: 'Elon',
//     },
//     {
//       id: 3,
//       liked: false,
//       author: 'Jack',
//     },
//     {
//       id: 4,
//       liked: false,
//       author: 'Bill',
//     },
// ]

const initialState = []

let allMemes;

const tempState = async () => {
  try {
    allMemes = await axios.get('/api/meme/getlist', {
      params: {
          id: id
        }
    })
    console.log(allMemes);
  }  catch(e) {
    console.log(e.message);
    
  }

  

}

tempState()


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
